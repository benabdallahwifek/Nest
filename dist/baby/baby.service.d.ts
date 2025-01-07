import { Model } from 'mongoose';
import { Baby } from './schema/baby.schema';
export declare class BabyService {
    private readonly babyModel;
    constructor(babyModel: Model<Baby>);
    createBaby(data: any): Promise<Baby>;
    getBabies(): Promise<Baby[]>;
}
