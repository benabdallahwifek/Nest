import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GeminiService {
  private readonly GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
  private readonly API_KEY = 'AIzaSyD_NFUfqhcOPu0EXOKje47oMJJ2gFE3WrU';

  constructor(private readonly httpService: HttpService) {}

  async getAIResponse(question: string): Promise<string> {
    const body = {
      contents: [
        {
          parts: [
            { text: question }
          ]
        }
      ]
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post(
          `${this.GEMINI_API_URL}?key=${this.API_KEY}`,
          body
        )
      );
      console.log('Réponse de Gemini :', response.data);

      return response.data?.candidates[0]?.content?.parts[0]?.text || 'Réponse non disponible.';
    } catch (error) {
      console.error('Erreur API Gemini :', error.response?.data || error.message);
      throw new Error('Impossible de générer la réponse avec l\'API Gemini');
    }
  }
  async getAdvice(symptoms: string[], mood: string): Promise<string> {
    const prompt = `
      Voici les symptômes de l'utilisateur : ${symptoms.join(', ') || 'Aucun symptôme'}.
      Son humeur actuelle est : ${mood || 'Non précisée'}.
      Donnez des conseils pour améliorer son bien-être en prenant en compte ces informations.
    `;
  
    const response = await this.getAIResponse(prompt);
    return response || 'Aucun conseil disponible pour le moment.';
  }
  
}