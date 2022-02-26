import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ListEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  text: string; //Заменить на строки
}
