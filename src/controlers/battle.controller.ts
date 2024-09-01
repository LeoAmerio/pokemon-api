import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BattleService } from 'src/services/battle.service';

@ApiTags('pokemon')
@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  @ApiOperation({ summary: 'Make 2 pokemons in a epic battle' })
  @ApiResponse({ status: 200, description: 'Return the result of the fight.' })
  async battle(@Body() battleData: { pokemon1Id: number; pokemon2Id: number }) {
    const result = await this.battleService.battle(battleData.pokemon1Id, battleData.pokemon2Id);
    return {
      winner: result.winner.name,
      loser: result.loser.name,
      battleLog: JSON.parse(result.battleLog)
    };
  }
}
