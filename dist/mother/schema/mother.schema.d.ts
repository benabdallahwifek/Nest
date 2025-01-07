import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Baby } from 'src/baby/schema/baby.schema';
export declare class Mother extends Document {
    name: string;
    age: number;
    maritalStatus: string;
    profession: string;
    address: string;
    babies: Baby[];
}
export declare const MotherSchema: mongoose.Schema<Mother, mongoose.Model<Mother, any, any, any, Document<unknown, any, Mother> & Mother & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Mother, Document<unknown, {}, mongoose.FlatRecord<Mother>> & mongoose.FlatRecord<Mother> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
