import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import GameRoom from './pages/GameRoom/GameRoom'
import Game from './pages/Game/Game'
import GameLobby from './pages/GameLobby/GameLobby'
import Navigation from './components/Navigation/Navigation'
import * as cahTypes from './utilities/cah-types'
import CurrentGames from './pages/CurrentGames/CurrentGames'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css'

// const socket = new WebSocket("ws://127.0.0.1:3030")
const socket = new WebSocket("ws://127.0.0.1:3030/chat")

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
  }, [])

  useEffect(() => {
    socket.addEventListener("open", (event) => {
      socket.send("Hello Server!");
    });
  
    function handleMessage(event) {
      const message = event.data;
      if (isJsonString(message)) {
          // Handle JSON message
          const jsonMessage = JSON.parse(message)
          // Your JSON message handling logic here
      } else {
          // Handle text message
          // Your text message handling logic here
          console.log("Received text message:", message)
      }
  }
  
  function isJsonString(str) {
      try {
          JSON.parse(str)
      } catch (e) {
          return false;
      }
      return true
  }
  
  
    socket.addEventListener("message", handleMessage)
    console.log('I am running!')
  }, [])
  
  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
        <nav>
          <Navigation />
        </nav>

        <main>
          <Routes>
            <Route 
              path='/current-games'
              element={
                <CurrentGames />
              }
            />
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
              // element={<GameRoom />}
              element={<Game />}
            />
            <Route 
              path='/'
              element={<Homepage />}
            />
          </Routes>
        </main>
      </div>
    </DndProvider>
  );
}

export default App;
