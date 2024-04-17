import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import GameRoom from './pages/GameRoom/GameRoom';
import GameLobby from './pages/GameLobby/GameLobby';
import Navigation from './components/Navigation/Navigation';
import * as cahTypes from './utilities/cah-types'
import './App.css'

function App() {
  const [gameReady, setGameReady] = useState(false)
  const [playerRole, setPlayerRole] = useState<cahTypes.PlayerRole>('Host')
  const [player, setPlayer] = useState<cahTypes.CAHPlayer>({
    player_name: '',
    role: playerRole || 'Host',
    white: [],
    black: [],
  })

  return (
    <div className='App'>
      <aside>
          <Navigation />
      </aside>

      <main>
        <Routes>
          <Route 
            path='/game-lobby'
            element={
              <GameLobby 
                gameReady={gameReady}
                setGameReady={setGameReady}
                playerRole={playerRole}
                setPlayerRole={setPlayerRole}
                player={player}
                setPlayer={setPlayer}
              />
            }
          />
          <Route 
            path='/game-room'
            element={<GameRoom />}
          />
          <Route 
            path='/'
            element={<Homepage />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
