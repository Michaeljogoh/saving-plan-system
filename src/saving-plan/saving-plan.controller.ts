import { Body, Controller, Delete, Param, Post, ValidationPipe } from '@nestjs/common';
import { Get, UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { CreateSavingPlanDto } from 'src/dto/create.saving-plan.dto';
import { Saving } from './saving-plan.entity';
import { SavingPlanService } from './saving-plan.service';

@Controller('saving-plan')
export class SavingPlanController {
  constructor(private readonly savingPlanService: SavingPlanService) {}

@UseGuards(JwtGuard)
  @Post('create')
  async createSavingPlan(@Body(ValidationPipe) createSavingPlan: CreateSavingPlanDto) : Promise<Saving>{
    return await this.savingPlanService.createSavingPlan(createSavingPlan)
  }


  @Get()
  async getAll(): Promise<Saving[]>{
    return await this.savingPlanService.getAll()
  }

@UseGuards(JwtGuard)
  @Delete(':id')
  delete(@Param(':id') id: number) {
    return this.savingPlanService.deleteSavingPlan(+id);
  }


}
