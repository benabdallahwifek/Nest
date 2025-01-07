import { MotherService } from './mother.service';
import { Mother } from './schema/mother.schema';
export declare class MotherController {
    private readonly motherService;
    constructor(motherService: MotherService);
    createMother(motherData: any): Promise<Mother>;
    getMothers(): Promise<Mother[]>;
    addBabyToMother(motherId: string, babyId: string): Promise<Mother>;
}
