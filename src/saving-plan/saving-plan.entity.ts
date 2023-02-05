import { Column, Entity,OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Invite } from 'src/invite/invite.entity';

@Entity()
export class Saving {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column()
  plan: string;

 @OneToMany(()=> Invite, (invite) => invite.id)
 invite: Invite[];
}