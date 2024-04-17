import cahData from '../../cah-cards.json'

const packs = cahData

let availableWhiteCards = []
let randomWhiteCard
let setHandAmount = 10 
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


// TODO: Change this file to TS
// TODO: Switch variables to variables in types.ts
// TODO: Beginning of the game should create player(s), host, spectators (if applicable), & game 
// TODO: 10 cards to be dealt to player(s)
// TODO: Random black card displayed
// TODO: Pick card(s) [figure out how to set how many white cards each individual black card needs]
// TODO: Chosen white card(s) will be removed from players hands
// TODO: Show page with black card and all players choices
// TODO: Host can choose their favorite
// TODO: Player associated with chosen card will 'win' black card
// TODO: New white card(s) will be dealt to players hands (to bring hand total to 10)
// TODO: Function to check is players' 'won black cards' = 7, if < 7, game continues... else, player with 7 wins
// TODO: Create winning screen
// TODO: Card hover animation
// TODO: Card dealing animation
// TODO: Scrolling through hand animation
// TODO: Chosen card/winning card animation
// TODO: Functionality to look at 'won black cards'
// TODO: Winning screen
// TODO: Live chat component
// TODO: Voice chat component
// TODO: 'Table view'
// TODO: 'Your hand view'
// TODO: 'Black card coming out of the box' animation



