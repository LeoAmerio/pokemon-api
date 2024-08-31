import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulatePokemon1693430400000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        'pokemon-1',
        'Pikachu',
        4,
        3,
        3,
        6,
        'Electric',
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'
      ]
    );
    await queryRunner.query(
      `INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        'pokemon-2',
        'Charmander',
        4,
        3,
        3,
        4,
        'Fire',
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'
      ]
    );
    await queryRunner.query(
      `INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        'pokemon-3',
        'Squirtle',
        3,
        4,
        3,
        3,
        'Water',
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'
      ]
    );
    await queryRunner.query(
      `INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        'pokemon-4',
        'Bulbasaur',
        4,
        3,
        3,
        3,
        'Grass/Poison',
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'
      ]
    );
    await queryRunner.query(
      `INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        'pokemon-5',
        'Eevee',
        4,
        3,
        4,
        5,
        'Normal',
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png'
      ]
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM pokemon WHERE id IN (?, ?, ?, ?, ?)`, [
      'pokemon-1',
      'pokemon-2',
      'pokemon-3',
      'pokemon-4',
      'pokemon-5'
    ]);
  }
}
