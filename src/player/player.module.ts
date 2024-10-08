import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { DatabaseModule } from 'src/database/database.module';
import { PlayerProvider } from './player.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PlayerController],
  providers: [PlayerService, ...PlayerProvider],
})
export class PlayerModule {}
