import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';
import { HealthForm, HealthFormSchema } from './schema/health.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: HealthForm.name, schema: HealthFormSchema }]),
  ],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
