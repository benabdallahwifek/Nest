import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { Doctor, DoctorSchema } from './doctor.schema';
import { User, UserSchema } from 'src/User/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Ajoute ici
  ],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
