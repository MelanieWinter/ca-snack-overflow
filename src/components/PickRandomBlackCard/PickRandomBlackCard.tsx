import { useEffect, useState } from 'react'
import cahData from '../../../cah-cards.json';
import Card from '../Card/Card'
import './PickRandomBlackCard.css'

export default function PickRandomBlackCard({ isCard, setCurrentBlackCard }) {
    const [randomBlackCard, setRandomBlackCard] = useState(null);

    const packs = cahData;

    useEffect(() => {
        function handleGetBlackCard() {
            let blackCards = [];
            for (const pack of packs) {
                if (pack.black && pack.black.length > 0) {
                    blackCards = blackCards.concat(pack.black);
                }
            }
            if (blackCards.length > 0) {
                const randomBlackCard = blackCards[Math.floor(Math.random() * blackCards.length)];
                setRandomBlackCard(randomBlackCard.text);
                setCurrentBlackCard(randomBlackCard.text)
            } else {
                setRandomBlackCard('No black cards available');
            }
        }
        handleGetBlackCard()
    }, [])

    return (
        <div className='PickRandomBlackCard'>
            { isCard ? 
                <Card cardContent={randomBlackCard} /> :
                <h1>{randomBlackCard}</h1>
            }
        </div>
    )
}