"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const authentication_guard_1 = require("./guards/authentication.guard");
const permissions_decorator_1 = require("./decorators/permissions.decorator");
const authorization_guard_1 = require("./guards/authorization.guard");
const resource_enum_1 = require("./role/enums/resource.enum");
const action_enum_1 = require("./role/enums/action.enum");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    someProtectedRoute(req) {
        return { message: 'Accessed Resource', userId: req.userId };
    }
};
__decorate([
    (0, permissions_decorator_1.Permissions)([{ resource: resource_enum_1.Resource.SETTINGS, actions: [action_enum_1.Action.READ] }]),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "someProtectedRoute", null);
AppController = __decorate([
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, authorization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)('/products'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map