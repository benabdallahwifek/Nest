import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';
import { SymptomsModule } from 'src/symptoms/symptoms.module';
import { CheckInModule } from 'src/checkin/checkin.module';
import { SymptomsService } from 'src/symptoms/symptoms.service';

@Module({
  imports: [HttpModule,SymptomsModule, CheckInModule], // Importation du HttpModule
    providers: [GeminiService],
  controllers: [GeminiController],
  exports: [GeminiService], 

})
export class GeminiModule {}
