import { Entity, PrimaryColumn , ManyToOne , JoinColumn ,  } from "typeorm";


@Entity('saving-invite')
export class SavingInvite {
  @PrimaryColumn({ name: 'saving_id' })
  saving_id: number;

  @PrimaryColumn({ name: 'invite_id' })
  courseId: number;

}