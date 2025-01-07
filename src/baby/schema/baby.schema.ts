import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Baby extends Document {
  // Nom du bébé (obligatoire)
  @Prop({ required: true })
  name: string;

  // Âge du bébé en mois (obligatoire)
  @Prop({ required: true })
  age: number;

  // Poids du bébé en kg (obligatoire)
  @Prop({ required: true })
  weight: number;

  // Taille du bébé en cm (obligatoire)
  @Prop({ required: true })
  height: number;

  // Comportement particulier (facultatif)
  @Prop()
  behavior: string;

  // Problèmes de santé (facultatif)
  @Prop()
  healthIssues: string;
}

export const BabySchema = SchemaFactory.createForClass(Baby);
