import Card from '../Card/Card'
import './GameTable.css'

export default function GameTable() {
    return (
        <div className='GameTable'>
            <div className='table-container'>
                <Card cardContent={"White"} />
                <Card cardContent={"Black"} />
                <Card cardContent={"Discard"} />
            </div>
        </div>
    )
}