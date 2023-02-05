import { Controller, Post } from '@nestjs/common';
import { InviteService } from './invite.service';

@Controller('invite')
export class InviteController {
  constructor(private readonly inviteService: InviteService) {}

  // @Post()
  // // async  createInvite(){
  // //   return await this.inviteService.
  // // }
}
