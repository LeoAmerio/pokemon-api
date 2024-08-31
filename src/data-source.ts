import { DataSource } from 'typeorm';
import { Pokemon } from './pokemon/pokemon.entity';
import { PopulatePokemon1693430400000 } from 'migrations/1693430400000-PopulatePokemons';
import { CreatePokemonTable1693430300000 } from 'migrations/1693430300000-CreatePokemonTable';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'pokemon.sqlite',
  entities: [Pokemon],
  migrations: [CreatePokemonTable1693430300000, PopulatePokemon1693430400000],
  synchronize: false,
  logging: true
});
