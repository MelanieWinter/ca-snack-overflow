import './GameOtherPlayer.css'

export default function GameOtherPlayer({ playerName }) {
    return (
        <div className='GameOtherPlayer'>
            <div className='other-player-container'>
                <div className='other-player-avatar'>{playerName}</div>
                <div className='other-player-hand'></div>
                <div className='other-player-won'>
                    <span>3</span>
                </div>
            </div>
        </div>
    )
}