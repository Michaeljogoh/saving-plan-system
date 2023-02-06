import { IsNotEmpty } from '@nestjs/class-validator';

export class InviteDto {
  id: number;
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  savingId: number;
}
