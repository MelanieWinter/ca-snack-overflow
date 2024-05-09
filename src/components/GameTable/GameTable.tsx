import { useState } from 'react'
import Card from '../Card/Card'
import { useDrop } from 'react-dnd'
import './GameTable.css'

export default function GameTable({ tableView, setTableView, currentPlayers, draggingCard, dropDiv, setDropDiv, addCardToDropDiv }) {
    const [playerChoicActive, setPlayerChoiceActive] = useState(false)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'card',
        drop: (item) => addCardToDropDiv(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    function handleTableViewChange(newView) {
        setTableView(newView)
    }

    return (
        <div className='GameTable'>
            <div className='table-container'>
                {tableView === 'threeDeck' && (
                    <>
                        <Card cardContent={"White"} />
                        <Card cardContent={"Black"} />
                        <Card cardContent={"Discard"} />
                    </>
                )}
                {tableView === 'playerChoice' && (
                    // Make all of these things into their own components
                    <div className='PlayerChoice'>
                        <Card cardContent={"Black Card"} />
                        <Card cardContent={"Space For Player's Chosen  White Card"} />
                        <div className='card-drop'>
                            {dropDiv.map((card) => {
                                <Card 
                                    key={card.index}
                                    id={card.index} 
                                    cardContent={card.cardContent}
                                    draggable={card.draggable}
                                />
                            })}
                        </div>
                    </div>
                )}
                {tableView === 'hostChoice' && (
                    <>
                        <Card cardContent={"Black Card"} />
                        {currentPlayers.map((player, index) => (
                            <div className='host-choice-div'>
                                {/* Add thumbs up? Thumbs down? Place to defend your card? */}
                                <Card 
                                    key={index} 
                                    cardContent={player.chosenWhiteCard}
                                />
                                <span>{player.playerName}</span>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div className="view-buttons">
                <button onClick={() => handleTableViewChange('threeDeck')}>Three Deck</button>
                <button onClick={() => handleTableViewChange('playerChoice')}>Player Choice</button>
                <button onClick={() => handleTableViewChange('hostChoice')}>Host Choice</button>
                <button onClick={() => handleTableViewChange('winningCard')}>Winning Card</button>
            </div>
        </div>
    )
}