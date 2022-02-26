import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuoteEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
}
