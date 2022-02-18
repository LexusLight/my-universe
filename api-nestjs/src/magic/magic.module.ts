import { Module } from '@nestjs/common';
import { MagicService } from './magic.service';
import { MagicController } from './magic.controller';

@Module({
  providers: [MagicService],
  controllers: [MagicController]
})
export class MagicModule {}
