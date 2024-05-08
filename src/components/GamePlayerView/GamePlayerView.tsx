import PlayerViewHand from '../PlayerViewHand/PlayerViewHand'
import './GamePlayerView.css'

export default function GamePlayerView({ tableView, draggingCard, setDraggingCard }) {
    return (
        <div className='GamePlayerView'>
            <div className='player-view-container'>
                <PlayerViewHand 
                    tableView={tableView}
                    draggingCard={draggingCard}
                    setDraggingCard={setDraggingCard}
                />
            </div>
        </div>
    )
}