import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import GameRoom from './pages/GameRoom/GameRoom'
import GameLobby from './pages/GameLobby/GameLobby'
import Navigation from './components/Navigation/Navigation'
import * as cahTypes from './utilities/cah-types'
import './App.css'

const socket = new WebSocket("ws://127.0.0.1:8080")

type Message = string

function App() {
  const [playerRole, setPlayerRole] = useState<cahTypes.PlayerRole>('Host')

  const [player, setPlayer] = useState<cahTypes.CAHPlayer>({
    player_name: '',
    role: playerRole || 'Host',
    white: [],
    black: [],
  })

  const [game, setGame] = useState<cahTypes.CAHGame>({
    game_name: '',
    white: [],
    black: [],
    white_discard: [],
    black_discard: [],
    game_active: false,
    players: [],
    current_black: cahTypes.CAHCardBlack
  })

  const [messages, setMessages] = useState<Message[]>([]);
  const addMessages = (msg: Message) => {
    setMessages((prev: Message[]) => [...prev, msg]);
  }

  const sendMessage = (msg) => {
    socket.send(msg)
    addMessages(msg)
  }

  // Setup
  useEffect(() => {
    socket.onmessage = (event: MessageEvent) => {
      const msg: Message = event.data
      addMessages(msg)
    }

    // Cleanup function
    // return () => {
    //   socket.close()
    // }
  }, [])

  // const updateNewGameRequest = () => {
  //   console.log("Player:", player)
  //   return {
  //       name: game.game_name,
  //       host: player
  //   }
  // }

  return (
    <>
      <div className='App'>
        <aside>
          <Navigation />
        </aside>

        <main>
          <div>
            <button onClick={() => sendMessage()}>Send</button>
          </div>
          <Routes>
            <Route 
              path='/game-lobby'
              element={
                <GameLobby 
                  playerRole={playerRole}
                  setPlayerRole={setPlayerRole}
                  player={player}
                  setPlayer={setPlayer}
                  game={game}
                  setGame={setGame}
                  socket={socket}
                  sendMessage={sendMessage}
                  // updateNewGameRequest={updateNewGameRequest}
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
    </>
  );
}

export default App;
