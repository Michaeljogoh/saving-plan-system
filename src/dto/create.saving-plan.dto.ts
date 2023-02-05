import { IsNotEmpty } from '@nestjs/class-validator';

export class CreateSavingPlanDto {
  id: number;

  @IsNotEmpty()
  plan: string;
}
