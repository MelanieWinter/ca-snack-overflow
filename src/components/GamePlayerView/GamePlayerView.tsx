import PlayerViewHand from '../PlayerViewHand/PlayerViewHand'
import './GamePlayerView.css'

export default function GamePlayerView({ tableView, draggingCard, setDraggingCard, dropDiv, setDropDiv }) {
    return (
        <div className='GamePlayerView'>
            <div className='player-view-container'>
                <PlayerViewHand 
                    tableView={tableView}
                    draggingCard={draggingCard}
                    setDraggingCard={setDraggingCard}
                    dropDiv={dropDiv}
                    setDropDiv={setDropDiv}
                />
            </div>
        </div>
    )
}