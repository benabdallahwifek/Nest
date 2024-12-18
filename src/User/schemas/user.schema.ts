import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';


export type UserDocument = User & Document;

export enum UserRole {
  UserNormal = 'usernormal',
  Medecin = 'medecin',
}


@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  bio: string;

  @Prop({ required: true })
  imageUri: string;

  @Prop({ required: true, enum: UserRole, default: UserRole.UserNormal })
  role: UserRole;

  @Prop({ type: [{ doctorName: String, category: String }], default: [] })
  selectedDoctors: { doctorName: string; category: string }[];
}

export const UserSchema = SchemaFactory.createForClass(User);
