import { Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @PrimaryColumn({ unique: true })
  title: string;
  /*
  1-1 Character
  1-1 Magic
  1-1 Fraction
  1-1 Legend
  1-M Header
  1-M Paragraph
  M-М Image
  1-M Quote
  1-M List
   */
}
