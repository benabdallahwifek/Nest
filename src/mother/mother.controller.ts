import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { MotherService } from './mother.service';
import { Mother } from './schema/mother.schema';

@Controller('mothers')
export class MotherController {
  constructor(private readonly motherService: MotherService) {}

  // Endpoint pour ajouter une maman
  @Post()
  async createMother(@Body() motherData: any): Promise<Mother> {
    console.log('Données reçues dans le backend :', motherData); // Log des données reçues
    return this.motherService.createMother(motherData);
  }

  // Endpoint pour lister toutes les mamans
  @Get()
  async getMothers() {
    return this.motherService.getMothers();
  }

  // Endpoint pour ajouter un bébé à une maman
  @Patch(':id/babies/:babyId')
  async addBabyToMother(
    @Param('id') motherId: string,
    @Param('babyId') babyId: string,
  ) {
    return this.motherService.addBabyToMother(motherId, babyId);
  }
}
