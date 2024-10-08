import { Inject, Injectable } from '@nestjs/common';
import { Character } from './character.entity';
import { ICharacter } from './character.interface';

@Injectable()
export class CharacterService {
  constructor(
    @Inject('PLAYER_REPOSITORY') private characterRepository: typeof Character,
  ) {}

  async findAll(): Promise<Character[]> {
    return this.characterRepository.findAll<Character>();
  }

  async findOne(id: number): Promise<Character> {
    return this.characterRepository.findByPk<Character>(id);
  }

  async create(
    characterData: ICharacter  ): Promise<Character> {
    return this.characterRepository.create<Character>({
      name: characterData.name,
      health: characterData.health,
      strength: characterData.strength,
    });
  }

  async update(
    id: number,
    updatedData: Partial<ICharacter>,
  ): Promise<[number, Character[]]> {
    return this.characterRepository.update<Character>(updatedData, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    return this.characterRepository.destroy({
      where: { id },
    });
  }
}
