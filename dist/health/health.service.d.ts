import { Model } from 'mongoose';
import { HealthForm } from './schema/health.schema';
export declare class HealthService {
    private healthFormModel;
    constructor(healthFormModel: Model<HealthForm>);
    create(data: any): Promise<HealthForm>;
    findAll(): Promise<HealthForm[]>;
}
