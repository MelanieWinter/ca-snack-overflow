import { useState } from 'react'
import GameOtherPlayer from '../../components/GameOtherPlayer/GameOtherPlayer'
import GameTable from '../../components/GameTable/GameTable'
import GamePlayerView from '../../components/GamePlayerView/GamePlayerView'
import './Game.css'

export default function Game() {

    const [currentPlayers, setCurrentPlayers] = useState([
        {
            playerName: 'Player 1',
            chosenWhiteCard: 'Something funny'
        },
        {
            playerName: 'Player 2',
            chosenWhiteCard: 'Something silly'
        },
        {
            playerName: 'Player 3',
            chosenWhiteCard: 'Something hilarious'
        },
        {
            playerName: 'Player 4',
            chosenWhiteCard: 'Something sad'
        },
    ])

    return (
        <section className='Game'>
            <div className='game-container'>
                <div className='game-other-players'>
                    {currentPlayers.map((player, index) => (
                        <GameOtherPlayer key={index} playerName={player.playerName} />
                    ))}
                </div>
                <div className='game-table'>
                    <GameTable 
                        currentPlayers={currentPlayers}
                    />
                </div>
                <div className='game-player-view'>
                    <GamePlayerView />
                </div>
            </div>
        </section>
    )
}