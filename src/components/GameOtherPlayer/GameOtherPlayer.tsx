import './GameOtherplayer.css'

export default function GameOtherplayer() {
    return (
        <div className='GameOtherPlayer'>
            <div className='other-player-container'>
                <div className='other-player-avatar'>USER</div>
                <div className='other-player-hand'></div>
                <div className='other-player-won'>
                    <span>3</span>
                </div>
            </div>
        </div>
    )
}