import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class HealthForm extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  lastPeriodDate: string; // Format jj/mm/aaaa

  @Prop({ required: true })
  weight: number; // En kg

  @Prop({ required: true })
  height: number; // En cm

  @Prop({ default: false })
  hasDiabetes: boolean;

  @Prop({ default: false })
  hasHypertension: boolean;

  @Prop({ default: false })
  hasHeartProblems: boolean;

  @Prop({ default: 5 })
  stressLevel: number; // Valeur entre 0 et 10

  @Prop()
  recentSymptoms: string; // Liste de symptômes séparés par des virgules
}

export const HealthFormSchema = SchemaFactory.createForClass(HealthForm);
