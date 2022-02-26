import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TitleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  text: string;
}
