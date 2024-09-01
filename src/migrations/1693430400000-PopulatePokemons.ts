import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulatePokemon1693430400000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const pokemons = [
      {
        id: 'pokemon-1',
        name: 'Pikachu',
        attack: 4,
        defense: 3,
        hp: 3,
        speed: 6,
        type: 'Electric',
        imageUrl:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'
      },
      {
        id: 'pokemon-2',
        name: 'Charmander',
        attack: 4,
        defense: 3,
        hp: 3,
        speed: 4,
        type: 'Fire',
        imageUrl:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'
      },
      {
        id: 'pokemon-3',
        name: 'Squirtle',
        attack: 3,
        defense: 4,
        hp: 3,
        speed: 3,
        type: 'Water',
        imageUrl:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'
      },
      {
        id: 'pokemon-4',
        name: 'Bulbasaur',
        attack: 4,
        defense: 3,
        hp: 3,
        speed: 3,
        type: 'Grass-Poison',
        imageUrl:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'
      },
      {
        id: 'pokemon-5',
        name: 'Eevee',
        attack: 4,
        defense: 3,
        hp: 4,
        speed: 5,
        type: 'Normal',
        imageUrl:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png'
      }
    ];

    for (const pokemon of pokemons) {
      await queryRunner.query(
        `INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          pokemon.id,
          pokemon.name,
          pokemon.attack,
          pokemon.defense,
          pokemon.hp,
          pokemon.speed,
          pokemon.type,
          pokemon.imageUrl
        ]
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM pokemon WHERE id IN ('pokemon-1', 'pokemon-2', 'pokemon-3', 'pokemon-4', 'pokemon-5')`
    );
  }
}

// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class PopulatePokemon1693430400000 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`
//       INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl)
//       VALUES
//         ('pokemon-1', 'Pikachu', 4, 3, 3, 6, 'Electric', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'),
//         ('pokemon-2', 'Charmander', 4, 3, 3, 4, 'Fire', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'),
//         ('pokemon-3', 'Squirtle', 3, 4, 3, 3, 'Water', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'),
//         ('pokemon-4', 'Bulbasaur', 4, 3, 3, 3, 'Grass-Poison', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'),
//         ('pokemon-5', 'Eevee', 4, 3, 4, 5, 'Normal', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png')
//     `);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`
//       DELETE FROM pokemon
//       WHERE id IN ('pokemon-1', 'pokemon-2', 'pokemon-3', 'pokemon-4', 'pokemon-5')
//     `);
//   }
// }

//PROBAR DESP ESTO
// import { MigrationInterface, QueryRunner } from 'typeorm';
// import { Pokemon } from '../entities/pokemon.entity';

// export class PopulatePokemon1693430400000 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     const pokemonRepository = queryRunner.manager.getRepository(Pokemon);
//     const pokemons = [
//       { id: 'pokemon-1', name: 'Pikachu', attack: 4, defense: 3, hp: 3, speed: 6, type: 'Electric', imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png' },
//       { id: 'pokemon-2', name: 'Charmander', attack: 4, defense: 3, hp: 3, speed: 4, type: 'Fire', imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png' },
//       { id: 'pokemon-3', name: 'Squirtle', attack: 3, defense: 4, hp: 3, speed: 3, type: 'Water', imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png' },
//       { id: 'pokemon-4', name: 'Bulbasaur', attack: 4, defense: 3, hp: 3, speed: 3, type: 'Grass-Poison', imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png' },
//       { id: 'pokemon-5', name: 'Eevee', attack: 4, defense: 3, hp: 4, speed: 5, type: 'Normal', imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png' },
//     ];

//     for (const pokemonData of pokemons) {
//       const pokemon = pokemonRepository.create(pokemonData);
//       await pokemonRepository.save(pokemon);
//     }
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DELETE FROM pokemon WHERE id IN ('pokemon-1', 'pokemon-2', 'pokemon-3', 'pokemon-4', 'pokemon-5')`);
//   }
// }
