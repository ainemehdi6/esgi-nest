import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Player } from './player.entity';
import { IPlayer } from './player.interface';

@Injectable()
export class PlayerService {
  constructor(
    @Inject('PLAYER_REPOSITORY') private playerRepository: typeof Player,
  ) {}

  async findAll(): Promise<Player[]> {
    return this.playerRepository.findAll<Player>();
  }

  async findOne(id: number): Promise<Player> {
    return this.playerRepository.findByPk<Player>(id);
  }

  async create(playerData: IPlayer): Promise<Player> {
    const hashedPassword = await bcrypt.hash(playerData.password, 10);
    return this.playerRepository.create<Player>({
      pseudo: playerData.pseudo,
      email: playerData.email,
      password: hashedPassword,
    });
  }

  async update(
    id: number,
    updatedData: Partial<IPlayer>,
  ): Promise<[number, Player[]]> {
    return this.playerRepository.update<Player>(updatedData, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    return this.playerRepository.destroy({
      where: { id },
    });
  }
}
