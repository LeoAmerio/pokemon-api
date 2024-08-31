/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @ApiOperation({ summary: 'Get all pokemons' })
  @ApiResponse({ status: 200, description: 'Return all pokemons.' })
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }
}
