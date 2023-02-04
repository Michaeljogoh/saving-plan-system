import {BaseEntity,Column, Entity,BeforeInsert,PrimaryGeneratedColumn,UpdateDateColumn, CreateDateColumn,
} from 'typeorm';
import  * as bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column()
  @CreateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

  @BeforeInsert()
  async setPassword(password : string) {
  this.password = await bcrypt.hash(password || this.password, 8);
  }

}
