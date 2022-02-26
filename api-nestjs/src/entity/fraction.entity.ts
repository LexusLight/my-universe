import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from './article.entity';

@Entity()
export class FractionEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column({ nullable: true })
  about: string;
  //М-М Character
  @OneToOne(()=> ArticleEntity)
  @JoinColumn()
  article: ArticleEntity; //Внешний ключ 1-1
}
