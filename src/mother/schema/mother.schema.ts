import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Baby } from 'src/baby/schema/baby.schema';

@Schema()
export class Mother extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  maritalStatus: string;

  @Prop()
  profession: string;

  @Prop()
  address: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Baby' }] })
  babies: Baby[];
}

export const MotherSchema = SchemaFactory.createForClass(Mother);
