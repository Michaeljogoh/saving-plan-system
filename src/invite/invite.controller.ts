import { Controller, Post, Body } from '@nestjs/common';
import { InviteDto } from 'src/dto/invite.dto';
import { InviteService } from './invite.service';
import { SavingPlanService } from 'src/saving-plan/saving-plan.service';
import { Invite } from './invite.entity';

@Controller('invite')
export class InviteController {
  constructor(private  inviteService: InviteService , private savingPlanService : SavingPlanService) {}

  @Post()
 
  async createInvite(@Body() createInvite: InviteDto): Promise<Invite | void > {
    const saving = await this.savingPlanService.getSavingPlanById(createInvite.savingId)
    return await this.inviteService.createInvite(createInvite , saving);
  }
}