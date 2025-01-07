import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HealthForm } from './schema/health.schema';

@Injectable()
export class HealthService {
  constructor(@InjectModel(HealthForm.name) private healthFormModel: Model<HealthForm>) {}

  // Créer une nouvelle entrée
  async create(data: any): Promise<HealthForm> {
    const newEntry = new this.healthFormModel(data);
    return newEntry.save();
  }

  // Récupérer toutes les entrées
  async findAll(): Promise<HealthForm[]> {
    return this.healthFormModel.find().exec();
  }
}
