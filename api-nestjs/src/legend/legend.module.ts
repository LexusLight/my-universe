import { Module } from '@nestjs/common';
import { LegendService } from './legend.service';
import { LegendController } from './legend.controller';

@Module({
  providers: [LegendService],
  controllers: [LegendController]
})
export class LegendModule {}
