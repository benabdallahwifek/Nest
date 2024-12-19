import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument, UserRole } from 'src/User/schemas/user.schema';

@Injectable()
export class DoctorService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Récupérer les médecins par bio (catégorie)
  async findByCategory(bio: string): Promise<User[]> {
    const results = await this.userModel.find({ bio: bio, role: UserRole.Medecin }).exec();
    console.log('Résultats trouvés :', results); // Log des résultats pour débogage
    return results;
  }

  // Ajouter un médecin aux favoris
  async addToFavorite(doctorId: string): Promise<User> {
    return this.userModel.findByIdAndUpdate(doctorId, { isFavorite: true }, { new: true }).exec();
  }

  // Récupérer les médecins favoris
  async findFavorites(): Promise<User[]> {
    return this.userModel.find({ isFavorite: true }).exec();
  }
}
