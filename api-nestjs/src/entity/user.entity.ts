import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @PrimaryColumn({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column()
  role: string; //сделать enum
}
