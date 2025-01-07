import { HealthService } from './health.service';
export declare class HealthController {
    private readonly healthService;
    constructor(healthService: HealthService);
    createHealthForm(formData: any): Promise<import("./schema/health.schema").HealthForm>;
    getAllHealthForms(): Promise<import("./schema/health.schema").HealthForm[]>;
}
