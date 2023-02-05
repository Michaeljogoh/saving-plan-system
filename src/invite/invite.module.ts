import { Module } from '@nestjs/common';
import { InviteService } from './invite.service';
import { InviteController } from './invite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InviteFriend } from './invite.entity';

@Module({
  imports:[TypeOrmModule.forFeature([InviteFriend])],
  controllers: [InviteController],
  providers: [InviteService]
})
export class InviteModule {}
