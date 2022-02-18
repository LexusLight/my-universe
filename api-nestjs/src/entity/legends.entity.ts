import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LegendsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @PrimaryColumn({ unique: true })
  name: string;
  @Column({ nullable: true })
  about: string;
  //М-М Character
  //1-1 Image ....ЧТО?
  //1-1 Article
}
