import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Saving } from 'src/saving-plan/saving-plan.entity';

@Entity()
export class Invite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @ManyToOne(() => Saving, (saving) => saving.id)
  saving: Saving;
}
