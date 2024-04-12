import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import GameRoom from './pages/GameRoom/GameRoom';
import GameLobby from './pages/GameLobby/GameLobby';
import Navigation from './components/Navigation/Navigation';
import './App.css'

function App() {
  return (
    <div className='App'>
      <aside>
          <Navigation />
      </aside>

      <main>
        <Routes>
          <Route 
            path='/game-lobby'
            element={<GameLobby />}
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
