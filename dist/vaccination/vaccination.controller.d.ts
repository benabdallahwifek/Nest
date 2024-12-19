import { VaccinationService } from './vaccination.service';
export declare class VaccinationController {
    private readonly vaccinationService;
    constructor(vaccinationService: VaccinationService);
    create(createVaccinationDto: any): Promise<import("./schemas/vaccination.schema").Vaccination>;
}
