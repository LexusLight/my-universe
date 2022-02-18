import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MagicEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @PrimaryColumn({ unique: true })
  name: string;
  @Column({ nullable: true })
  about: string;
  //М-1 Юзер
}
