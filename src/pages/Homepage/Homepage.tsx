import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/game-room`; 
        navigate(path);
    }

    return (
        <section className="Homepage">
            <h1>Cards Against Snack Overflow</h1>
            <button
                onClick={routeChange}
                className="play-button"
            >
                Wanna Play?
            </button>
        </section>
    )
}