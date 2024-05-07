import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
    return (
        <nav className="Navigation">
            <ul>
                <li>
                    <Link to={'/'} className='nav-link'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/current-games'} className='nav-link'>
                        Current Games
                    </Link>
                </li>
                <li>
                    <Link to={'/game-lobby'} className='nav-link'>
                        Lobby
                    </Link>
                </li>
                <li>
                    <Link to={'/game-room'} className='nav-link'>
                        Game
                    </Link>
                </li>
                <li>Rules</li>
            </ul>
        </nav>
    )
}