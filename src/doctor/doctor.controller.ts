import { Controller, Get, Patch, Query, Body, Param } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctors')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  // Endpoint pour récupérer les médecins par bio (catégorie)
  @Get('/category')
  async getDoctorsByCategory(@Query('bio') bio: string) {
    return this.doctorService.findByCategory(bio);
  }

  // Endpoint pour ajouter un médecin en favori
  @Patch('/favorite/:id')
  async addDoctorToFavorite(@Param('id') doctorId: string) {
    return this.doctorService.addToFavorite(doctorId);
  }

  // Récupérer les médecins favoris
  @Get('/favorites')
  async getFavoriteDoctors() {
    return this.doctorService.findFavorites();
  }
}
