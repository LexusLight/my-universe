import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from './article.entity';

@Entity()
export class MagicEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column({ nullable: true })
  about: string;
  //М-1 Юзер
  @OneToOne(()=> ArticleEntity)
  @JoinColumn()
  article: ArticleEntity; //Внешний ключ 1-1
}
