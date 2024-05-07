import PlayerViewHand from '../PlayerViewHand/PlayerViewHand'
import './GamePlayerView.css'

export default function GamePlayerView() {
    return (
        <div className='GamePlayerView'>
            <div className='player-view-container'>
                <PlayerViewHand />
            </div>
        </div>
    )
}