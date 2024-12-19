import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor } from './doctor.schema';

@Injectable()
export class DoctorService {
  constructor(@InjectModel('Doctor') private doctorModel: Model<Doctor>) {}

  async findByCategory(bio: string): Promise<Doctor[]> {
    return this.doctorModel.find({ bio: bio }).exec();
  }

  async addToFavorite(doctorId: string): Promise<Doctor> {
    return this.doctorModel.findByIdAndUpdate(doctorId, { isFavorite: true }, { new: true }).exec();
  }

  async findFavorites(): Promise<Doctor[]> {
    return this.doctorModel.find({ isFavorite: true }).exec();
  }
}
