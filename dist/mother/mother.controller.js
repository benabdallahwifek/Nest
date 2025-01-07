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
exports.MotherController = void 0;
const common_1 = require("@nestjs/common");
const mother_service_1 = require("./mother.service");
let MotherController = class MotherController {
    constructor(motherService) {
        this.motherService = motherService;
    }
    async createMother(motherData) {
        console.log('Données reçues dans le backend :', motherData);
        return this.motherService.createMother(motherData);
    }
    async getMothers() {
        return this.motherService.getMothers();
    }
    async addBabyToMother(motherId, babyId) {
        return this.motherService.addBabyToMother(motherId, babyId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MotherController.prototype, "createMother", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MotherController.prototype, "getMothers", null);
__decorate([
    (0, common_1.Patch)(':id/babies/:babyId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('babyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MotherController.prototype, "addBabyToMother", null);
MotherController = __decorate([
    (0, common_1.Controller)('mothers'),
    __metadata("design:paramtypes", [mother_service_1.MotherService])
], MotherController);
exports.MotherController = MotherController;
//# sourceMappingURL=mother.controller.js.map