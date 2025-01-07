import { BabyService } from './baby.service';
export declare class BabyController {
    private readonly babyService;
    constructor(babyService: BabyService);
    createBaby(babyData: any): Promise<import("./schema/baby.schema").Baby>;
    getBabies(): Promise<import("./schema/baby.schema").Baby[]>;
}
