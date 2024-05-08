import Card from '../Card/Card'
import './PlayerViewHand.css'

export default function PlayerViewHand({ tableView, draggingCard, setDraggingCard }) {
    
    return (
        <div className='PlayerViewHand'>
            <div className='player-view-hand-container'>
                <Card 
                    cardContent={'Something wild'} 
                    draggable={true} 
                />
                <Card 
                    cardContent={'Something crazy'} 
                    draggable={true} 
                />
                <Card 
                    cardContent={'Something disturbing'} 
                    draggable={true} 
                />
                <Card 
                    cardContent={'Something dangerous'} 
                    draggable={true} 
                />
                <Card 
                    cardContent={'Something ridiculous'} 
                    draggable={true} 
                />
                <Card 
                    cardContent={'Something confusing'} 
                    draggable={true} 
                />
                <Card 
                    cardContent={'Something funny'} 
                    draggable={true} 
                />
                <Card 
                    cardContent={'Something entertaining'} 
                    draggable={true} 
                />
                <Card 
                    cardContent={'Something silly'} 
                    draggable={true} 
                />
                <Card 
                    cardContent={'Something else'} 
                    draggable={true} 
                />
            </div>
        </div>
    )
}