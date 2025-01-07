/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Document } from 'mongoose';
export declare class HealthForm extends Document {
    fullName: string;
    age: number;
    lastPeriodDate: string;
    weight: number;
    height: number;
    hasDiabetes: boolean;
    hasHypertension: boolean;
    hasHeartProblems: boolean;
    stressLevel: number;
    recentSymptoms: string;
}
export declare const HealthFormSchema: import("mongoose").Schema<HealthForm, import("mongoose").Model<HealthForm, any, any, any, Document<unknown, any, HealthForm> & HealthForm & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HealthForm, Document<unknown, {}, import("mongoose").FlatRecord<HealthForm>> & import("mongoose").FlatRecord<HealthForm> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
