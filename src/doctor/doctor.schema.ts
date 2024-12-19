import { Schema, Document } from 'mongoose';

export interface Doctor extends Document {
  name: string;
  role: string;
  bio: string;
  userId: string;
  isFavorite: boolean;
}

export const DoctorSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String, required: true },
  userId: { type: String, required: false },
  isFavorite: { type: Boolean, default: false },
});
