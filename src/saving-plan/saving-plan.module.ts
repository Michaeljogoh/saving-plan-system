import { Module } from '@nestjs/common';
import { SavingPlanService } from './saving-plan.service';
import { SavingPlanController } from './saving-plan.controller';
import { Saving } from './saving-plan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Saving])],
  controllers: [SavingPlanController],
  providers: [SavingPlanService],
  exports:[SavingPlanService]
})
export class SavingPlanModule {}
