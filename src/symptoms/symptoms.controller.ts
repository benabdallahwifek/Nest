import { Body, Controller,Request , Post, UseGuards } from '@nestjs/common';
import { SymptomsService } from './symptoms.service';
import { AuthenticationGuard } from 'src/guards/authentication.guard';

@Controller('symptoms')
export class SymptomsController {
  constructor(private readonly symptomsService: SymptomsService) {}

  @UseGuards(AuthenticationGuard)
  @Post('save')
async saveSymptoms(
  @Request() req, // Obtenir le userId depuis le JWT
  @Body('symptoms') symptoms: string[],
  ) {
    const userId = req.userId; // Injecté par AuthenticationGuard
    return this.symptomsService.saveSymptoms(userId, symptoms);
  }

}
