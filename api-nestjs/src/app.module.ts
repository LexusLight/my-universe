import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { ModuleService } from './controller/module/module.service';
import { CharacterService } from './character/character.service';
import { CharacterModule } from './character/character.module';
import { MagicModule } from './magic/magic.module';
import { LegendModule } from './legend/legends.module';
import { ArticleController } from './article/article.controller';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [UserModule, CharacterModule, MagicModule, LegendModule, ArticleModule],
  providers: [ModuleService, CharacterService],
  controllers: [ArticleController],
})
export class AppModule {}
