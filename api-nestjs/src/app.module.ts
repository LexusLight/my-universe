import { Module } from '@nestjs/common';
import { CharacterService } from './character/character.service';
import { CharacterModule } from './character/character.module';
import { MagicModule } from './magic/magic.module';
import { LegendModule } from './legend/legend.module';
import { ArticleController } from './article/article.controller';
import { ArticleModule } from './article/article.module';
import {createConnection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserModule } from './user/user.module';
import { CharacterEntity } from './entity/character.entity';
import { CharacterImageEntity } from './entity/characterimage.entity';
import { ArticleEntity } from './entity/article.entity';
import { FractionEntity } from './entity/fraction.entity';
import { LegendsEntity } from './entity/legends.entity';
import { ListEntity } from './entity/list.entity';
import { MagicEntity } from './entity/magic.entity';
import { QuoteEntity } from './entity/quote.entity';
import { TitleEntity } from './entity/title.entity';

const databaseModule =
    TypeOrmModule.forRoot({  //Так в связке TypeORM-NestJS подключается бд
      type:"sqlite",
      database:"./database.db",
      entities: [
        ArticleEntity,
        UserEntity,
        CharacterEntity,
        CharacterImageEntity,
        FractionEntity,
        LegendsEntity,
        ListEntity,
        MagicEntity,
        QuoteEntity,
        TitleEntity,
        UserEntity,
      ],
      synchronize: true,
      logging: false
  })//Q

@Module({
  imports: [CharacterModule, MagicModule, LegendModule, ArticleModule, UserModule, databaseModule],
  providers: [CharacterService],
  controllers: [ArticleController],
})
export class AppModule {}
