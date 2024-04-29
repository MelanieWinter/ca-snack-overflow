import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import './Homepage.css'

export default function Homepage() {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
        const path = `/game-room`; 
        navigate(path);
    }

    return (
        <section className="Homepage">
            <p>Cards For Humanity</p>
            <button
                onClick={routeChange}
                className="play-button"
            >
                Wanna Play?
            </button>
            <Card />
        </section>
    )
}