import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BabyController } from './baby.controller';
import { BabyService } from './baby.service';
import { Baby, BabySchema } from './schema/baby.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Baby.name, schema: BabySchema }]), // Important !
  ],
  controllers: [BabyController],
  providers: [BabyService],
  exports: [BabyService], // Si utilisé dans d'autres modules
})
export class BabyModule {}
