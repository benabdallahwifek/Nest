import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Symptom } from './symptoms.dto';

@Injectable()
export class SymptomsService {
  constructor(@InjectModel(Symptom.name) private symptomModel: Model<Symptom>) {}

  async saveSymptoms(userId: string, symptoms: string[]) {
    console.log('Saving symptoms for user:', { userId, symptoms });
    const newRecord = new this.symptomModel({ userId, symptoms });
    return newRecord.save();
  }
  
  async getSymptomsByUserId(userId: string): Promise<Symptom | null> {
    return this.symptomModel.findOne({ userId }).exec(); // Renvoie un objet ou null
  }
  
  

  
}
