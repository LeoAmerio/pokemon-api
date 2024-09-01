import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BattleResult } from 'src/entities/battle.entity';
import { Pokemon } from 'src/entities/pokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(BattleResult)
    private readonly battleResultRepository: Repository<BattleResult>
  ) {}

  async battle(pokemon1Id: number, pokemon2Id: number): Promise<BattleResult> {
    const pokemon1 = await this.pokemonRepository.findOne({ where: { id: pokemon1Id } });
    const pokemon2 = await this.pokemonRepository.findOne({ where: { id: pokemon2Id } });

    if (!pokemon1 || !pokemon2) {
      throw new Error('Pokemon not found');
    }

    const battleResult = [];
    let attacker = this.determinateFirstAttack(pokemon1, pokemon2);
    let defender = attacker === pokemon1 ? pokemon2 : pokemon1;

    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      const damage = this.calculateDamage(attacker, defender);
      defender.hp -= damage;

      battleResult.push(
        `${attacker.name} attacks ${defender.name} with ${damage} damage and now the hp of defender is ${defender.hp}`
      );

      [attacker, defender] = [defender, attacker];
    }

    const winner = pokemon1.hp > 0 ? pokemon1 : pokemon2;
    const loser = winner === pokemon1 ? pokemon2 : pokemon1;

    const result = new BattleResult();
    result.winner = winner;
    result.loser = loser;
    result.battleLog = JSON.stringify(battleResult);

    return this.battleResultRepository.save(result);
  }

  private determinateFirstAttack(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
    if (pokemon1.speed !== pokemon2.speed) {
      return pokemon1.speed > pokemon2.speed ? pokemon1 : pokemon2;
    }
    return pokemon1.attack >= pokemon2.attack ? pokemon1 : pokemon2;
  }

  private calculateDamage(attacker: Pokemon, defender: Pokemon): number {
    const damage = Math.max(1, attacker.attack - defender.defense);
    return damage;
  }
}
