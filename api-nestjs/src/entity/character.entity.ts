import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CharacterEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ nullable: true })
  fullName: string;
  @Column()
  fraction: string; //Внешний ключ M-M
  @Column()
  magic: string; //Внешний ключ M-M
  @Column()
  legends: string; //Внешний ключ M-M
  @Column()
  article: string; //Внешний ключ 1-1
}
