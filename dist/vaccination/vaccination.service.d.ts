import { Model } from 'mongoose';
import { Vaccination } from './schemas/vaccination.schema';
export declare class VaccinationService {
    private vaccinationModel;
    constructor(vaccinationModel: Model<Vaccination>);
    create(data: any): Promise<Vaccination>;
}
