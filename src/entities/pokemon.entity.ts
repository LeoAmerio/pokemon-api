import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryColumn({ type: 'varchar' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'integer' })
  attack: number;

  @Column({ type: 'integer' })
  defense: number;

  @Column({ type: 'integer' })
  hp: number;

  @Column({ type: 'integer' })
  speed: number;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  imageUrl: string;
}
