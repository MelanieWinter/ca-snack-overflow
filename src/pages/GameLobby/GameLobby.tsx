import React, { useEffect, useState } from 'react'
import * as cahTypes from '../../utilities/cah-types'
import './GameLobby.css'

type GameLobbyProps = {
    playerRole: cahTypes.PlayerRole
    setPlayerRole: React.Dispatch<React.SetStateAction<cahTypes.PlayerRole>>
    player: cahTypes.CAHPlayer
    setPlayer: React.Dispatch<React.SetStateAction<cahTypes.CAHPlayer>>
    game: cahTypes.CAHGame
    setGame: React.Dispatch<React.SetStateAction<cahTypes.CAHGame>>
    socket: WebSocket
    sendMessage: (message: string) => void
}

export default function GameLobby({ playerRole, setPlayerRole, player, setPlayer, game, setGame, socket, sendMessage }: GameLobbyProps) {
    const [gameSettings, setGameSettings] = useState({
        playerRole: 'Host' as cahTypes.PlayerRole,
        playerName: '',
        gameName: '',
        gameActive: false,
    })

    const [error, setError] = useState('')

    function handleNameChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setGameSettings({ ...gameSettings, playerName: evt.target.value })
        setError('')
    }

    function handleGameNameChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setGameSettings({ ...gameSettings, gameName: evt.target.value })
        setError('')
    }

    // make handle input change, handle select change, etc...

    function handleRoleChange(evt: React.ChangeEvent<HTMLSelectElement>) {
        setGameSettings({ ...gameSettings, playerRole: evt.target.value as cahTypes.PlayerRole })
        setError('')
    }

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            gameSettings.gameActive = true
            setGame({
                ...game,
                game_name: gameSettings.gameName,
                game_active: gameSettings.gameActive,
            })
            setPlayer({
                ...player,
                player_name: gameSettings.playerName,
                role: gameSettings.playerRole,
            })
            console.log("Player and role updated successfully.")
        } catch (error) {
            console.error("Error updating player and role:", error)
        }
    }

    const updateNewGameRequest = () => {
        console.log("Player:", player)
        const newGameRequest = {
            name: gameSettings.gameName,
            host: player
        }
        return newGameRequest
    }

    useEffect(() => {
        if (player.player_name !== '') {
            const terminationChar = '\u0000'

            sendMessage(JSON.stringify(updateNewGameRequest()) + terminationChar)
        }
    }, [player])

    return (
        <section className='GameLobby'>
            <>
                { game.game_active ?
                    <>
                        <h2>Hey, {player.player_name}, you are signed up as a {playerRole}!</h2>
                        {/* <SocketMessage 
                            socket={socket} 
                        /> */}
                    </> :
                    <h1>Game Lobby</h1>
                }
                <div className='setupFormDiv'>
                    <form 
                        className='setupForm'
                        autoComplete='off' 
                        onSubmit={handleSubmit}
                    >
                        {/* Player form fields */}
                        <label><span>Player Name: </span>
                            <input
                                type='text'
                                name='playerName'
                                value={gameSettings.playerName}
                                onChange={handleNameChange}
                                required
                            />
                        </label>
                        <label><span>Role: </span>
                            <select
                                id="role"
                                value={gameSettings.playerRole}
                                onChange={handleRoleChange}
                            >
                                <option value="Host">Host</option>
                                <option value="Player">Player</option>
                                <option value="Spectator">Spectator</option>
                            </select>
                        </label>

                        {/* Game form fields */}
                        <label><span>Game Name: </span>
                            <input 
                                type="text" 
                                name='game_name'
                                value={gameSettings.gameName}
                                onChange={handleGameNameChange}
                            />
                        </label>

                        <button type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </>
        </section>
    )
}
