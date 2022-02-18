import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ImageEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  url: string; //Мб хранить бинарником в базе. Но зачем?
  @Column()
  title: string;
  //M-M Article
  //M-M Legend
  //M-M Character
  //M-M Fraction
  //M-M Magic
  //M-M User
}
