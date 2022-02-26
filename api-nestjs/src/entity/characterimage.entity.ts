import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CharacterEntity } from './character.entity';

@Entity()
export class CharacterImageEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  caption: string;
  @Column()
  url: string;
  @ManyToOne(() => CharacterEntity, (character) => character.images)
  character: CharacterEntity;
}
