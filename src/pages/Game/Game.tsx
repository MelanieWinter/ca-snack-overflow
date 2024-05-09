import { useState } from 'react'
import GameOtherPlayer from '../../components/GameOtherPlayer/GameOtherPlayer'
import GameTable from '../../components/GameTable/GameTable'
import GamePlayerView from '../../components/GamePlayerView/GamePlayerView'
import './Game.css'

export default function Game() {
    const [tableView, setTableView] = useState('threeDeck')

    // tableView options: threeDeck, playerChoice, hostChoice, winningCard  

    const [draggingCard, setDraggingCard] = useState(null)

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

    const [dropDiv, setDropDiv] = useState([])

    function addCardToDropDiv(id) {
        console.log('something', id)
    }
    
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
                        tableView={tableView}
                        setTableView={setTableView}
                        currentPlayers={currentPlayers}
                        draggingCard={draggingCard}
                        dropDiv={dropDiv}
                        setDropDiv={setDropDiv}
                        addCardToDropDiv={addCardToDropDiv}
                    />
                </div>
                <div className='game-player-view'>
                    <GamePlayerView 
                        tableView={tableView}
                        draggingCard={draggingCard}
                        setDraggingCard={setDraggingCard}
                        dropDiv={dropDiv}
                        setDropDiv={setDropDiv}
                    />
                </div>
            </div>
        </section>
    )
}