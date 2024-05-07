import Card from '../../components/Card/Card'
import './CurrentGames.css'

export default function CurrentGames() {
    return (
        <section className='CurrentGames'>
            <form>
                <input type='text' />
                <button type='submit'>Search</button>
            </form>
            <div className='current-game-cards'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}