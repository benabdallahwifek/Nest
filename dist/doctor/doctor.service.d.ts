import { Model } from 'mongoose';
import { User, UserDocument } from 'src/User/schemas/user.schema';
export declare class DoctorService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findByCategory(bio: string): Promise<User[]>;
    addToFavorite(doctorId: string): Promise<User>;
    findFavorites(): Promise<User[]>;
}
