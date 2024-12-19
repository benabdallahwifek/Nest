import { Controller, Post,Request, Body, Get, Param, UseGuards } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { SymptomsService } from 'src/symptoms/symptoms.service';
import { CheckInService } from 'src/checkin/checkin.service';
import { AuthenticationGuard } from 'src/guards/authentication.guard';

@Controller('gemini')
export class GeminiController {
  constructor(
    private readonly geminiService: GeminiService,
    private readonly symptomsService: SymptomsService,
    private readonly checkInService: CheckInService,

  ) {}

  @Post('ask')
  async askQuestion(@Body('question') question: string) {
    const response = await this.geminiService.getAIResponse(question);
    return { question, response };
  }

  @UseGuards(AuthenticationGuard)
  @Get('advice')
  async getAdvice(@Request() req) {
    const userId = req.userId; // Récupération automatique du userId injecté par AuthenticationGuard

    // Récupérer les symptômes pour l'utilisateur
    const symptomsRecord = await this.symptomsService.getSymptomsByUserId(userId);
    const symptoms = symptomsRecord?.symptoms || [];

    // Récupérer le dernier check-in (mood)
    const checkIns = await this.checkInService.getCheckInsByUserId(userId);
    const latestCheckIn = checkIns.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
    const mood = latestCheckIn?.mood || null;

    // Obtenir des conseils
    const advice = await this.geminiService.getAdvice(symptoms, mood);

    // Construire la réponse
    const response: any = { userId, advice };
    if (symptoms.length > 0) {
      response.symptoms = symptoms;
    }
    if (mood) {
      response.mood = mood;
    }

    return response;
  }
}