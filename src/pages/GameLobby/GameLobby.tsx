import React, { useState } from 'react';
import * as cahTypes from '../../utilities/cah-types';
import './GameLobby.css';

type GameLobbyProps = {
    gameReady: boolean;
    setGameReady: React.Dispatch<React.SetStateAction<boolean>>;
    playerRole: cahTypes.PlayerRole;
    setPlayerRole: React.Dispatch<React.SetStateAction<cahTypes.PlayerRole>>;
    player: cahTypes.CAHPlayer;
    setPlayer: React.Dispatch<React.SetStateAction<cahTypes.CAHPlayer>>;
};

export default function GameLobby({ gameReady, setGameReady, playerRole, setPlayerRole, player, setPlayer }: GameLobbyProps) {
    const [gameSettings, setGameSettings] = useState({
        playerRole: 'Host' as cahTypes.PlayerRole,
        playerName: '',
    })

    const [error, setError] = useState('')

    function handleNameChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setGameSettings({ ...gameSettings, playerName: evt.target.value })
        setError('')
    }

    function handleRoleChange(evt: React.ChangeEvent<HTMLSelectElement>) {
        setGameSettings({ ...gameSettings, playerRole: evt.target.value as cahTypes.PlayerRole })
        setError('')
    }

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            setPlayer({
                ...player,
                player_name: gameSettings.playerName,
                role: gameSettings.playerRole,
            });
            setPlayerRole(gameSettings.playerRole)
            setGameReady(true);
            console.log("Player and role updated successfully.")
        } catch (error) {
            console.error("Error updating player and role:", error)
        }
    }

    return (
        <section className='GameLobby'>
            <>
                { gameReady ?
                    <h2>Hey, {player.player_name}, you are signed up as a {playerRole}!</h2> :
                    <h1>Game Lobby</h1>
                }
                <div className='setupForm'>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <label>Player Name: </label>
                        <input
                            type='text'
                            name='playerName'
                            value={gameSettings.playerName}
                            onChange={handleNameChange}
                            required
                        />
                        <label>Role: </label>
                        <select
                            id="role"
                            value={gameSettings.playerRole}
                            onChange={handleRoleChange}
                        >
                            <option value="Host">Host</option>
                            <option value="Player">Player</option>
                            <option value="Spectator">Spectator</option>
                        </select>
                        <button type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </>
        </section>
    )
}
