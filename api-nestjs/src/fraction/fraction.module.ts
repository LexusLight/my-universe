import { Module } from '@nestjs/common';
import { FractionService } from './fraction.service';
import { FractionController } from './fraction.controller';

@Module({
  providers: [FractionService],
  controllers: [FractionController]
})
export class FractionModule {}
