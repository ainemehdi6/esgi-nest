import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IPlayer } from './player.interface';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService){}

  @Get()
  findAll(): any {
    return this.playerService.findAll()
  }

  @Get()
  findById(@Param('id') id: number): any {
    return this.playerService.findOne(id);
  }

  @Post()
  create(@Body('player') player: IPlayer): any {
    return this.playerService.create(player);
  }

  @Put()
  update(@Param('id') id: number, @Body('player') player: IPlayer): any {
    return this.playerService.update(id, player);
  }

  @Delete()
  delete(@Param('id') id: number): any {
    return this.playerService.delete(id);
  }
}
