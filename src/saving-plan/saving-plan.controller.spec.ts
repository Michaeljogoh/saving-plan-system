import { Test, TestingModule } from '@nestjs/testing';
import { SavingPlanController } from './saving-plan.controller';
import { SavingPlanService } from './saving-plan.service';

describe('SavingPlanController', () => {
  let controller: SavingPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavingPlanController],
      providers: [SavingPlanService],
    }).compile();

    controller = module.get<SavingPlanController>(SavingPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
