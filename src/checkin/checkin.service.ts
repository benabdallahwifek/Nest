import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CheckIn, CheckInDocument } from './checkin.schema';

@Injectable()
export class CheckInService {
  constructor(
    @InjectModel(CheckIn.name) private checkInModel: Model<CheckInDocument>, // Injection correcte
  ) {}

  async createCheckIn(data: Partial<CheckIn>): Promise<CheckIn> {
    console.log('Saving check-in for user:', data.userId);
    const checkIn = new this.checkInModel(data);
    return checkIn.save();
  }
  
  async getCheckInsByUserId(userId: string): Promise<CheckIn[]> {
    return this.checkInModel.find({ userId }).exec();
  }
  
  
}
