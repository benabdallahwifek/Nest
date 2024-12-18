import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { Permissions } from './decorators/permissions.decorator';
import { AuthorizationGuard } from './guards/authorization.guard';
import { Resource } from './role/enums/resource.enum';
import { Action } from './role/enums/action.enum';

@UseGuards(AuthenticationGuard, AuthorizationGuard)
@Controller('/products')
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Permissions([{ resource: Resource.SETTINGS, actions: [Action.READ] }])
  @Get()
  someProtectedRoute(@Req() req) {
    return { message: 'Accessed Resource', userId: req.userId };
  }
}
