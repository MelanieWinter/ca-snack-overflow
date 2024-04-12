import './Card.css'
export default function Card({ cardContent, color, handleShowResults, setChosenWhiteCard }) {

    const handleOnMouseMove = e => {
        const { currentTarget: target } = e

        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top
            console.log(y, x)

        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
        console.log(target.style)
    }

    for(const card of document.querySelectorAll(".CardFront")) {
        card.onmousemove = e => handleOnMouseMove(e)
    }

    function handleResults() {
        setChosenWhiteCard(cardContent)
        handleShowResults()
        // remove card from cards array in PlayerHand
    }

    return (
        <div className='Card' onClick={handleResults}>
            <div className='card-border'></div>
            <div 
                className='card-content'
                style={{
                    backgroundColor: color === 'white' ? 'rgb(71, 71, 71)' : 'rgb(23, 23, 23)'
                }}
            >
                <div className='card-content-text'>
                    {cardContent}
                </div>
            </div>
        </div>
    )
} 

// Make it so black card does not have hover animations!