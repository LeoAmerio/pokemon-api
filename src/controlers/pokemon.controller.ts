/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../entities/pokemon.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @ApiOperation({ summary: 'Get all pokemons' })
  @ApiResponse({ status: 200, description: 'Return all pokemons.' })
  async getAll(): Promise<Pokemon[]> {
    return this.pokemonService.getAll();
  }
}
