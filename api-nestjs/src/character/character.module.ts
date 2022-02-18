import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { FractionModule } from '../fraction/fraction.module';

@Module({
  controllers: [CharacterController],
  imports: [FractionModule]
})
export class CharacterModule {}
