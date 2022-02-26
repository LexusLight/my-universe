import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CharacterImageEntity } from './characterimage.entity';
import { FractionEntity } from './fraction.entity';
import { MagicEntity } from './magic.entity';
import { LegendsEntity } from './legends.entity';
import { ArticleEntity } from './article.entity';

@Entity()
export class CharacterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  fullName: string;

  @ManyToMany(()=>FractionEntity)
  @JoinColumn()
  fraction: FractionEntity[]; //Внешний ключ M-M

  @ManyToMany(()=>MagicEntity)
  @JoinColumn()
  magic: MagicEntity[]; //Внешний ключ M-M

  @ManyToMany(()=>LegendsEntity)
  @JoinColumn()
  legends: LegendsEntity[]; //Внешний ключ M-M

  @OneToOne(()=> ArticleEntity)
  @JoinColumn()
  article: ArticleEntity; //Внешний ключ 1-1

  @OneToOne(() => CharacterImageEntity)
  @JoinColumn()
  portrait: CharacterImageEntity;

  @OneToMany(() => CharacterImageEntity, (image) => image.character)
  images: CharacterImageEntity[];
}
