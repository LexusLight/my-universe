import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from './article.entity';

@Entity()
export class LegendsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column({ nullable: true })
  about: string;
  //М-М Character
  //1-1 Image ....ЧТО?
  @OneToOne(()=> ArticleEntity)
  @JoinColumn()
  article: ArticleEntity; //Внешний ключ 1-1
}
