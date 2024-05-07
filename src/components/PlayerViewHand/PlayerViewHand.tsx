import Card from '../Card/Card'
import './PlayerViewHand.css'

export default function PlayerViewHand() {
    return (
        <div className='PlayerViewHand'>
            <div className='player-view-hand-container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}