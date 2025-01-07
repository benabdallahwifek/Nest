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
exports.MotherService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mother_schema_1 = require("./schema/mother.schema");
let MotherService = class MotherService {
    constructor(motherModel) {
        this.motherModel = motherModel;
    }
    async createMother(data) {
        console.log('Tentative de sauvegarde dans MongoDB:', data);
        const newMother = new this.motherModel(data);
        return newMother.save();
    }
    async getMothers() {
        return this.motherModel.find().populate('babies').exec();
    }
    async addBabyToMother(motherId, babyId) {
        return this.motherModel.findByIdAndUpdate(motherId, { $push: { babies: babyId } }, { new: true }).exec();
    }
};
MotherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(mother_schema_1.Mother.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MotherService);
exports.MotherService = MotherService;
//# sourceMappingURL=mother.service.js.map