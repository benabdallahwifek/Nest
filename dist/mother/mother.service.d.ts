import { Model } from 'mongoose';
import { Mother } from './schema/mother.schema';
export declare class MotherService {
    private motherModel;
    constructor(motherModel: Model<Mother>);
    createMother(data: any): Promise<Mother>;
    getMothers(): Promise<Mother[]>;
    addBabyToMother(motherId: string, babyId: string): Promise<Mother>;
}
