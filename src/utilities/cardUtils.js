import cahData from '../../cah-cards.json'

const packs = cahData

let availableWhiteCards = []
let randomWhiteCard
let setHandAmount = 10 /* THIS SHOULD BE IN A GAME MODEL PLAYER HAND MODEL OR SOMETHING */
let cardsNeededInHand = 10

// need function to set amount in hand to change and cards needed to be the difference of cards in hand and 10

function getWhiteCards() {
    for (const pack of packs) {
        if (pack.white && pack.white.length > 0) {
            availableWhiteCards = availableWhiteCards.concat(pack.white)
        }
    }
}
getWhiteCards()
// console.log('AVAILABLE WHITE CARDS -->', availableWhiteCards)

export function pickRandomWhiteCard() {
    if (availableWhiteCards.length > 0) {
        randomWhiteCard = availableWhiteCards[Math.floor(Math.random() * availableWhiteCards.length)].text
    } else {
        randomWhiteCard('No white cards available');
    }
}
// pickRandomWhiteCard()
// console.log('RANDOM WHITE CARD -->', randomWhiteCard)

export function cardDealer() {
    let cardsInHand = []

    while (cardsNeededInHand > 0) {
        pickRandomWhiteCard()
        cardsInHand.push(randomWhiteCard)
        cardsNeededInHand--
    }
    return cardsInHand
}
// cardDealer()
// console.log('CARDS IN HAND -->', cardsInHand)
// console.log('CARDS NEEDED HAND -->', cardsNeededInHand)