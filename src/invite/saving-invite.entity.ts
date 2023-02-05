import { Saving } from 'src/saving-plan/saving-plan.entity';
import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Invite } from './invite.entity';

@Entity('saving-invite')
export class SavingInvite {
  @PrimaryColumn({ name: 'saving_id' })
  saving_id: number;

  @PrimaryColumn({ name: 'invite_id' })
  invite_id: number;

  @OneToMany(() => Saving, (saving) => saving.invite)
  @JoinColumn([{ name: 'saving_id', referencedColumnName: 'id' }])
  saving: Saving[];

  @ManyToOne(() => Invite, (invite) => invite.saving)
  @JoinColumn([{ name: 'invite_id', referencedColumnName: 'id' }])
  invite: Invite[];
}
