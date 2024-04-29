import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './Homepage.css';

export default function Homepage() {
    const navigate = useNavigate(); 
    const routeChange = () => { 
        const path = `/game-room`; 
        navigate(path);
    }

    // Array of card data (for example)
    const cardData = [
        { id: 1, title: 'Card 1' },
        { id: 2, title: 'Card 2' },
        { id: 3, title: 'Card 3' },
        { id: 4, title: 'Card 4' },
        { id: 5, title: 'Card 5' },
        { id: 6, title: 'Card 6' },
        { id: 7, title: 'Card 7' },
    ];

    return (
        <section className="Homepage">
            <p>Cards For Humanity</p>
            <button
                onClick={routeChange}
                className="play-button"
            >
                Wanna Play?
            </button>
            <div className='cards-animation-div'>
                {cardData.map(card => (
                    <Card key={card.id} title={card.title} />
                ))}
            </div>
        </section>
    );
}
