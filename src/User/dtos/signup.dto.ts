import { IsEmail,IsEnum, IsOptional,IsString, Matches, MinLength } from 'class-validator';
import { UserRole } from '../schemas/user.schema';

export class SignupDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[0-9])/, { message: 'Password must contain at least one number' })
  password: string;

  @IsString()
  bio: string;

  @IsString()  // Accepte n'importe quelle chaîne de caractères pour l'URL de l'image
  imageUri: string;

  @IsEnum(UserRole)
  @IsOptional() // Optionnel, par défaut "usernormal"
  role?: UserRole;
}
