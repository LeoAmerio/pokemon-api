import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Entity()
export class BattleResult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pokemon)
  winner: Pokemon;

  @ManyToOne(() => Pokemon)
  loser: Pokemon;

  @Column('simple-json')
  battleLog: string;
}
