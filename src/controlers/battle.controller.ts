import { Body, Controller, Post } from '@nestjs/common';
import { BattleService } from 'src/services/battle.service';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async battle(@Body() battleData: { pokemon1Id: number; pokemon2Id: number }) {
    const result = await this.battleService.battle(battleData.pokemon1Id, battleData.pokemon2Id);
    return {
      winner: result.winner.name,
      loser: result.loser.name,
      battleLog: JSON.parse(result.battleLog)
    };
  }
}
