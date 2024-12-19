import { Body, Controller,Request, Post, UseGuards } from '@nestjs/common';
import { CheckInService } from './checkin.service';
import { CheckIn } from './checkin.schema';
import { AuthenticationGuard } from 'src/guards/authentication.guard';

@Controller('checkin') // <-- La route de base est ici
export class CheckInController {
  constructor(private readonly checkInService: CheckInService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  async createCheckIn(@Request() req, @Body() data: Partial<CheckIn>) {
    const userId = req.userId; // Injecté par AuthenticationGuard
    return this.checkInService.createCheckIn({ ...data, userId });
  }
}
