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
exports.VaccinationController = void 0;
const common_1 = require("@nestjs/common");
const vaccination_service_1 = require("./vaccination.service");
let VaccinationController = class VaccinationController {
    constructor(vaccinationService) {
        this.vaccinationService = vaccinationService;
    }
    async create(createVaccinationDto) {
        return this.vaccinationService.create(createVaccinationDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VaccinationController.prototype, "create", null);
VaccinationController = __decorate([
    (0, common_1.Controller)('vaccination'),
    __metadata("design:paramtypes", [vaccination_service_1.VaccinationService])
], VaccinationController);
exports.VaccinationController = VaccinationController;
//# sourceMappingURL=vaccination.controller.js.map