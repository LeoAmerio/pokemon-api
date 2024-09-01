import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PokemonModule } from './pokemon/pokemon.module';
import { Pokemon } from './entities/pokemon.entity';
import { BattleResult } from './entities/battle.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemon.sqlite',
      entities: [__dirname + '/**/*.entity{.ts}'],
      synchronize: false
    }),
    TypeOrmModule.forFeature([Pokemon, BattleResult])
    // PokemonModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
