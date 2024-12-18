import { UserRole } from '../schemas/user.schema';
export declare class SignupDto {
    username: string;
    email: string;
    password: string;
    bio: string;
    imageUri: string;
    role?: UserRole;
}
