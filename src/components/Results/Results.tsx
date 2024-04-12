import Card from "../Card/Card"
import './Results.css'

export default function Results({ chosenWhiteCard, currentBlackCard }) {
    return (
        <div className="Results">
            {/* <p>{currentBlackCard}</p>
            <p>{chosenWhiteCard}</p> */}
            <Card 
                cardContent={currentBlackCard}
            />
            <Card 
                cardContent={chosenWhiteCard} 
                color={'white'} 
            />
        </div>
    )
}