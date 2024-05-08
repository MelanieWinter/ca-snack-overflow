import Card from '../Card/Card'
import './PlayerViewHand.css'

export default function PlayerViewHand() {
    
    return (
        <div className='PlayerViewHand'>
            <div className='player-view-hand-container'>
                <Card cardContent={'Something wild'} />
                <Card cardContent={'Something crazy'} />
                <Card cardContent={'Something disturbing'} />
                <Card cardContent={'Something dangerous'} />
                <Card cardContent={'Something ridiculous'} />
                <Card cardContent={'Something confusing'} />
                <Card cardContent={'Something funny'} />
                <Card cardContent={'Something entertaining'} />
                <Card cardContent={'Something silly'} />
                <Card cardContent={'Something else'} />
            </div>
        </div>
    )
}