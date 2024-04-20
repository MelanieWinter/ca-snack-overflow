// Player roles
export type PlayerRole = 'Host' | 'Player' | 'Spectator'

// Represents a player
export type CAHPlayer = {
    player_name: string
    role: PlayerRole
    white: CAHCardWhite[]
    black: CAHCardBlack[]
};

// A CAH white card 
export type CAHCardWhite = {
    text: string
    pack: number
};

// A CAH black card
export type CAHCardBlack = {
    text: string
    pick: number
    pack: number
};

// A CAH pack 
export type CAHCardSet = {
    name: string
    description?: string
    official: boolean
    white?: CAHCardWhite[]
    black?: CAHCardBlack[]
}

// The game master
export type CAHGame = {
    game_name: string
    white: CAHCardWhite[]
    black: CAHCardBlack[]
    white_discard: CAHCardWhite[]
    black_discard: CAHCardBlack[]
    game_active: boolean
    players: CAHPlayer[]
    current_black?: CAHCardBlack
};

