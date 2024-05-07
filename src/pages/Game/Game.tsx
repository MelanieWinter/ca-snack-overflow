import GameOtherplayer from '../../components/GameOtherPlayer/GameOtherPlayer'
import GameTable from '../../components/GameTable/GameTable'
import GamePlayerView from '../../components/GamePlayerView/GamePlayerView'
import './Game.css'

export default function Game() {
    return (
        <section className='Game'>
            <div className='game-container'>
                <div className='game-other-players'>
                    <GameOtherplayer />
                    <GameOtherplayer />
                    <GameOtherplayer />
                    <GameOtherplayer />
                </div>
                <div className='game-table'>
                    <GameTable />
                </div>
                <div className='game-player-view'>
                    <GamePlayerView />
                </div>
            </div>
        </section>
    )
}