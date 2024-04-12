import { useEffect, useState } from 'react'
import PlayerHand from '../../components/PlayerHand/PlayerHand'
import PickRandomBlackCard from '../../components/PickRandomBlackCard/PickRandomBlackCard'
import Results from '../../components/Results/Results'
import * as cardUtils from '../../utilities/cardUtils'
import './GameRoom.css'

export default function GameRoom() {
    const [startingHandDealt, setStartingHandDealt] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [chosenWhiteCard, setChosenWhiteCard] = useState()
    const [currentBlackCard, setCurrentBlackCard] = useState()
    const [cardAmountInHand, setCardAmountInHand] = useState()
    const [currentHand, setCurrentHand] = useState([])

    let cardsInHand

    function dealStartingHand() {
        if (startingHandDealt === false) {
            cardsInHand = cardUtils.cardDealer()
            setCurrentHand(cardsInHand)
            setStartingHandDealt(true)
        }
        // Make a 'catch'/'else' block
    }

    function handleShowResults() {
        setShowResults(true)
    }

    return (
        <section className="GameRoom">
            { startingHandDealt ? (
                !showResults && 
                <>
                    <PickRandomBlackCard 
                        isCard={false}
                        setCurrentBlackCard={setCurrentBlackCard}  
                    />
                    <PlayerHand 
                        cardAmountInHand={cardAmountInHand} 
                        handleShowResults={handleShowResults}
                        setChosenWhiteCard={setChosenWhiteCard} 
                        currentHand={currentHand}
                    />
                </>
            ) : (
                <>
                    <h1>Are you ready for this?</h1>
                    <button onClick={dealStartingHand}>
                        Deal Starting Hand
                    </button>
                </>
            )}

            {/* { showResults ? (
                <Results 
                    chosenWhiteCard={chosenWhiteCard} 
                    currentBlackCard={currentBlackCard}
                />
            ) : (
                <PlayerHand 
                    cardAmountInHand={cardAmountInHand} 
                    handleShowResults={handleShowResults}
                    setChosenWhiteCard={setChosenWhiteCard} 
                />
            )}  */}
        </section>
    )
}