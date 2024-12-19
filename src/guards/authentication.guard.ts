import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException('Token is missing');
    }

    try {
      const payload = this.jwtService.verify(token);
      request['userId'] = payload.userId; // Injection du userId dans la requête
      return true;
    } catch (e) {
      Logger.error(`Authentication failed: ${e.message}`);
      throw new UnauthorizedException('Invalid Token');
    }
  }

  private extractToken(request: Request): string | undefined {
    // Vérifie d'abord dans les Headers
    const authHeader = request.headers.authorization;
    if (authHeader) {
      return authHeader.split(' ')[1];
    }

    // Vérifie dans les Query Params
    const tokenFromQuery = request.query['Authorization'] as string;
    if (tokenFromQuery) {
      return tokenFromQuery.split(' ')[1] || tokenFromQuery;
    }

    return undefined;
  }
}
