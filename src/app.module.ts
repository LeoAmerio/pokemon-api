/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonModule } from './pokemon/pokemon.module';
// import { AppDataSource } from './data-source';
// import { Pokemon } from './pokemon/pokemon.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemon.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    PokemonModule
  ],
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonService]
})
export class AppModule {}
