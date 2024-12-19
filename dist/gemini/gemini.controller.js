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
exports.GeminiController = void 0;
const common_1 = require("@nestjs/common");
const gemini_service_1 = require("./gemini.service");
const symptoms_service_1 = require("../symptoms/symptoms.service");
const checkin_service_1 = require("../checkin/checkin.service");
const authentication_guard_1 = require("../guards/authentication.guard");
let GeminiController = class GeminiController {
    constructor(geminiService, symptomsService, checkInService) {
        this.geminiService = geminiService;
        this.symptomsService = symptomsService;
        this.checkInService = checkInService;
    }
    async askQuestion(question) {
        const response = await this.geminiService.getAIResponse(question);
        return { question, response };
    }
    async getAdvice(req) {
        const userId = req.userId;
        const symptomsRecord = await this.symptomsService.getSymptomsByUserId(userId);
        const symptoms = (symptomsRecord === null || symptomsRecord === void 0 ? void 0 : symptomsRecord.symptoms) || [];
        const checkIns = await this.checkInService.getCheckInsByUserId(userId);
        const latestCheckIn = checkIns.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
        const mood = (latestCheckIn === null || latestCheckIn === void 0 ? void 0 : latestCheckIn.mood) || null;
        const advice = await this.geminiService.getAdvice(symptoms, mood);
        const response = { userId, advice };
        if (symptoms.length > 0) {
            response.symptoms = symptoms;
        }
        if (mood) {
            response.mood = mood;
        }
        return response;
    }
};
__decorate([
    (0, common_1.Post)('ask'),
    __param(0, (0, common_1.Body)('question')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeminiController.prototype, "askQuestion", null);
__decorate([
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, common_1.Get)('advice'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GeminiController.prototype, "getAdvice", null);
GeminiController = __decorate([
    (0, common_1.Controller)('gemini'),
    __metadata("design:paramtypes", [gemini_service_1.GeminiService,
        symptoms_service_1.SymptomsService,
        checkin_service_1.CheckInService])
], GeminiController);
exports.GeminiController = GeminiController;
//# sourceMappingURL=gemini.controller.js.map