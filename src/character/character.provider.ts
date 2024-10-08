import { Character } from './character.entity';

export const CharacterProvider = [
  {
    provide: 'CHARACTER_REPOSITORY',
    useValue: Character,
  },
];
