import Card from '../Card/Card'
import './PlayerViewHand.css'

export default function PlayerViewHand({ tableView, draggingCard, setDraggingCard, dropDiv, setDropDiv }) {
    const cardContents = [
        'Something wild',
        'Something crazy',
        'Something disturbing',
        'Something dangerous',
        'Something ridiculous',
        'Something confusing',
        'Something funny',
        'Something entertaining',
        'Something silly',
        'Something else'
    ]

    return (
        <div className='PlayerViewHand'>
            <div className='player-view-hand-container'>
                {cardContents.map((content, index) => (
                    <Card
                        key={index}
                        id={index + 1} 
                        cardContent={content}
                        draggable={true}
                    />
                ))}
            </div>
        </div>
    )
}
