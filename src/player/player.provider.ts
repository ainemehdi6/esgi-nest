import { Player } from "./player.entity";

export const PlayerProvider = [
    {
        provide: 'PLAYER_REPOSITORY',
        useValue: Player
    }
]