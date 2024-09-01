import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '../entities/pokemon.entity';
import { PokemonService } from '../services/pokemon.service';
import { PokemonController } from '../controlers/pokemon.controller';
import { BattleService } from 'src/services/battle.service';
import { BattleController } from 'src/controlers/battle.controller';
import { BattleResult } from 'src/entities/battle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, BattleResult])],
  controllers: [PokemonController, BattleController],
  providers: [PokemonService, BattleService],
  exports: [TypeOrmModule]
})
export class PokemonModule {}
