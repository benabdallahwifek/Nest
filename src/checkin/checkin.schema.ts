import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CheckInDocument = CheckIn & Document;
export enum MoodDescription {
  Angry = 'Angry 😡',
  Sad = 'Sad 😟',
  Neutral = 'Neutral 😐',
  Content = 'Content 🙂',
  Happy = 'Happy 😊',
}
@Schema()
export class CheckIn {
  @Prop({ required: true }) userId: string;
  @Prop({ required: true }) date: string;
  
  @Prop({ required: true, enum: MoodDescription })
  mood: MoodDescription;
  @Prop({ type: [String], default: [] }) discomforts: string[];
  @Prop() elaboration: string;
}

export const CheckInSchema = SchemaFactory.createForClass(CheckIn);
