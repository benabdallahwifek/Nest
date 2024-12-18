import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/User/schemas/user.schema';

/**
 * Décorateur personnalisé pour spécifier le rôle requis pour accéder à une route.
 * @param role - Le rôle requis (ex: 'usernormal', 'medecin').
 */
export const Role = (role: UserRole) => SetMetadata('role', role);
