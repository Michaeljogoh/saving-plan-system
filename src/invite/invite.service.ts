import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InviteDto } from 'src/dto/invite.dto';
import { Saving } from 'src/saving-plan/saving-plan.entity';
import { Repository } from 'typeorm';
import { Invite } from './invite.entity';

@Injectable()
export class InviteService {
  constructor( @InjectRepository(Invite) private inviteRepository:Repository<Invite>) {}

  // Invite to saving plan
  async createInvite(invite: InviteDto, saving: Saving) :Promise<Invite> {
    const newInvite = await this.inviteRepository.save(invite);
    saving.invite = [...saving.invite, newInvite];
    return newInvite;
  }


}
