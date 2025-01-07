import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Baby } from './schema/baby.schema';

@Injectable()
export class BabyService {
  constructor(@InjectModel(Baby.name) private readonly babyModel: Model<Baby>) {}

  async createBaby(data: any): Promise<Baby> {
    const newBaby = new this.babyModel(data);
    return newBaby.save();
  }

  async getBabies(): Promise<Baby[]> {
    return this.babyModel.find().exec();
  }
}
