import { Controller, Get, Post, Body } from '@nestjs/common';
import { BabyService } from './baby.service';

@Controller('babies')
export class BabyController {
  constructor(private readonly babyService: BabyService) {}

  @Post()
  async createBaby(@Body() babyData: any) {
    return this.babyService.createBaby(babyData);
  }

  @Get()
  async getBabies() {
    return this.babyService.getBabies();
  }
}
