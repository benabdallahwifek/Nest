import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mother } from './schema/mother.schema';

@Injectable()
export class MotherService {
  constructor(@InjectModel(Mother.name) private motherModel: Model<Mother>) {}

  // Ajouter une maman
  async createMother(data: any): Promise<Mother> {
    console.log('Tentative de sauvegarde dans MongoDB:', data); // Log avant la sauvegarde
    const newMother = new this.motherModel(data);
    return newMother.save();
  }

  // Récupérer toutes les mamans
  async getMothers(): Promise<Mother[]> {
    return this.motherModel.find().populate('babies').exec(); // Inclut les bébés associés
  }

  // Ajouter un bébé à une maman
  async addBabyToMother(motherId: string, babyId: string): Promise<Mother> {
    return this.motherModel.findByIdAndUpdate(
      motherId,
      { $push: { babies: babyId } },
      { new: true },
    ).exec();
  }
}
