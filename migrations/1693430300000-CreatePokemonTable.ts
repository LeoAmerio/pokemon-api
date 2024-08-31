import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePokemonTable1693430300000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pokemon',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'attack',
            type: 'integer'
          },
          {
            name: 'defense',
            type: 'integer'
          },
          {
            name: 'hp',
            type: 'integer'
          },
          {
            name: 'speed',
            type: 'integer'
          },
          {
            name: 'type',
            type: 'varchar'
          },
          {
            name: 'imageUrl',
            type: 'varchar'
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemon');
  }
}
