import { DoctorService } from './doctor.service';
export declare class DoctorController {
    private doctorService;
    constructor(doctorService: DoctorService);
    getDoctorsByCategory(bio: string): Promise<import("../User/schemas/user.schema").User[]>;
    addDoctorToFavorite(doctorId: string): Promise<import("../User/schemas/user.schema").User>;
    getFavoriteDoctors(): Promise<import("../User/schemas/user.schema").User[]>;
}
