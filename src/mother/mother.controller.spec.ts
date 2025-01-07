import { Test, TestingModule } from '@nestjs/testing';
import { MotherController } from './mother.controller';
import { MotherService } from './mother.service';

describe('MotherController', () => {
  let controller: MotherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotherController],
      providers: [MotherService],
    }).compile();

    controller = module.get<MotherController>(MotherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
