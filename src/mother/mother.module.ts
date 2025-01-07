import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MotherService } from './mother.service';
import { MotherController } from './mother.controller';
import { Mother, MotherSchema } from './schema/mother.schema';
import { BabyModule } from 'src/baby/baby.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mother.name, schema: MotherSchema }]),
    BabyModule, // Important pour accéder à BabyModel

  ],
  providers: [MotherService],
  controllers: [MotherController],
})
export class MotherModule {}
