import { Controller, Get, Post, Body } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post()
  async createHealthForm(@Body() formData: any) {
    return this.healthService.create(formData);
  }

  @Get()
  async getAllHealthForms() {
    return this.healthService.findAll();
  }
}
