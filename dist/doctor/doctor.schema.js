"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DoctorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    bio: { type: String, required: true },
    userId: { type: String, required: false },
    isFavorite: { type: Boolean, default: false },
});
//# sourceMappingURL=doctor.schema.js.map