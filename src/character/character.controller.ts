import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ICharacter } from './character.interface';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
  constructor(private characterService: CharacterService) {}

  @Get()
  findAll(): any {
    return this.characterService.findAll();
  }

  @Get()
  findById(@Param('id') id: number): any {
    return this.characterService.findOne(id);
  }

  @Post()
  create(@Body('character') character: ICharacter): any {
    return this.characterService.create(character);
  }

  @Put()
  update(
    @Param('id') id: number,
    @Body('character') character: ICharacter,
  ): any {
    return this.characterService.update(id, character);
  }

  @Delete()
  delete(@Param('id') id: number): any {
    return this.characterService.delete(id);
  }
}
