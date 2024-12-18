import { Permission } from 'src/role/dtos/role.dto';
export declare const PERMISSIONS_KEY = "permissions";
export declare const Permissions: (permissions: Permission[]) => import("@nestjs/common").CustomDecorator<string>;
