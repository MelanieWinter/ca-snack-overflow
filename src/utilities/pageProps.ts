import { CAHPlayer } from "./cah-types"
import { useContext } from 'react';
import { WebSocketContext } from './WebSocketContext';


export type GameLobbyProps = {
    playerRole: 'Host' | 'Player' | 'Spectator'
    playerName: string
    gameName: string
    gameActive: boolean
}

export type NewGameRequestProps = {
    name: string,
    host: CAHPlayer,
}

export const useWebSocket = () => {
    const context = useContext(WebSocketContext);
    if (!context) {
        throw new Error('useWebSocket must be used within a WebSocketProvider');
    }
    return context;
};

// export const socket = new WebSocket("ws://localhost:8080")