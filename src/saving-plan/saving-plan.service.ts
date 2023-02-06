import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Saving } from './saving-plan.entity';
import { CreateSavingPlanDto } from 'src/dto/create.saving-plan.dto';

@Injectable()
export class SavingPlanService {
  constructor(
    @InjectRepository(Saving) private savingRepository: Repository<Saving>,
  ) {}

  async createSavingPlan(savingPlan: CreateSavingPlanDto): Promise<Saving> {
    const newSavingPlan = await this.savingRepository.create(savingPlan);
    await this.savingRepository.save(savingPlan);
    return newSavingPlan;
  }

  // Select from * saving JOIN invite
  async getAll(): Promise<Saving[]> {
    return this.savingRepository.find({ relations: ['invite'] });
  }


  async getSavingPlanById(id : number){
    return await this.savingRepository.findOne({where:{id}})
  }


  // Delete a saving plan
  async deleteSavingPlan(id: number) {
    const savingPlan = await this.savingRepository.delete(id);
    if (savingPlan) return id;
    throw new HttpException(
      'Saving Plan Does not exist',
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}
