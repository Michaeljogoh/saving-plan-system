import { Module } from '@nestjs/common';
import { InviteService } from './invite.service';
import { InviteController } from './invite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invite } from './invite.entity';
import { SavingPlanService } from 'src/saving-plan/saving-plan.service';
import { SavingPlanController } from 'src/saving-plan/saving-plan.controller';
import { Saving } from 'src/saving-plan/saving-plan.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Invite , Saving])],
  controllers: [InviteController , SavingPlanController],
  providers: [InviteService , SavingPlanService ],
})
export class InviteModule {}
