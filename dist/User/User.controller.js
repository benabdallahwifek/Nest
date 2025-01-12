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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const signup_dto_1 = require("./dtos/signup.dto");
const login_dto_1 = require("./dtos/login.dto");
const refresh_tokens_dto_1 = require("./dtos/refresh-tokens.dto");
const change_password_dto_1 = require("./dtos/change-password.dto");
const authentication_guard_1 = require("../guards/authentication.guard");
const forgot_password_dto_1 = require("./dtos/forgot-password.dto");
const reset_password_dto_1 = require("./dtos/reset-password.dto");
const User_service_1 = require("./User.service");
const user_schema_1 = require("./schemas/user.schema");
const role_decorator_1 = require("../role/role.decorator");
const symptoms_service_1 = require("../symptoms/symptoms.service");
const checkin_service_1 = require("../checkin/checkin.service");
let AuthController = class AuthController {
    constructor(authService, symptomsService, checkInService) {
        this.authService = authService;
        this.symptomsService = symptomsService;
        this.checkInService = checkInService;
    }
    async getUserData(req) {
        const userId = req.userId;
        const symptoms = await this.symptomsService.getSymptomsByUserId(userId);
        const checkIns = await this.checkInService.getCheckInsByUserId(userId);
        return {
            userId,
            symptoms,
            checkIns,
        };
    }
    async getRecommendations(userId) {
        return this.authService.getUserRecommendations(userId);
    }
    async saveSelection(body) {
        return this.authService.saveUserSelection(body.userId, body.doctorName, body.category);
    }
    async signUp(signupData) {
        return this.authService.signup(signupData);
    }
    async login(credentials) {
        return this.authService.login(credentials);
    }
    async refreshTokens(refreshTokenDto) {
        return this.authService.refreshTokens(refreshTokenDto.refreshToken);
    }
    async changePassword(changePasswordDto, req) {
        return this.authService.changePassword(req.userId, changePasswordDto.oldPassword, changePasswordDto.newPassword);
    }
    async forgotPassword(forgotPasswordDto) {
        return this.authService.forgotPassword(forgotPasswordDto.email);
    }
    async resetPassword(resetPasswordDto) {
        return this.authService.resetPassword(resetPasswordDto.newPassword, resetPasswordDto.resetToken);
    }
    getMedecinDashboard() {
        return { message: 'Bienvenue sur le tableau de bord des médecins.' };
    }
    getUserDashboard() {
        return { message: 'Bienvenue sur le tableau de bord des utilisateurs normaux.' };
    }
};
__decorate([
    (0, common_1.Get)('user-data'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getUserData", null);
__decorate([
    (0, common_1.Get)('recommendations/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getRecommendations", null);
__decorate([
    (0, common_1.Post)('save-selection'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "saveSelection", null);
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_tokens_dto_1.RefreshTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
__decorate([
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, common_1.Put)('change-password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_password_dto_1.ChangePasswordDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Put)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, role_decorator_1.Role)(user_schema_1.UserRole.Medecin),
    (0, common_1.Get)('medecin/dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getMedecinDashboard", null);
__decorate([
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, role_decorator_1.Role)(user_schema_1.UserRole.UserNormal),
    (0, common_1.Get)('user/dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getUserDashboard", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [User_service_1.AuthService,
        symptoms_service_1.SymptomsService,
        checkin_service_1.CheckInService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=User.controller.js.map