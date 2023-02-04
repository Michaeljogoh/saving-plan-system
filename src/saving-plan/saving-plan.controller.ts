import { Controller } from '@nestjs/common';
import { SavingPlanService } from './saving-plan.service';

@Controller('saving-plan')
export class SavingPlanController {
  constructor(private readonly savingPlanService: SavingPlanService) {}
}
