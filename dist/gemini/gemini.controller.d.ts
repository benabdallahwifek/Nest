import { GeminiService } from './gemini.service';
import { SymptomsService } from 'src/symptoms/symptoms.service';
import { CheckInService } from 'src/checkin/checkin.service';
export declare class GeminiController {
    private readonly geminiService;
    private readonly symptomsService;
    private readonly checkInService;
    constructor(geminiService: GeminiService, symptomsService: SymptomsService, checkInService: CheckInService);
    askQuestion(question: string): Promise<{
        question: string;
        response: string;
    }>;
    getAdvice(req: any): Promise<any>;
}
