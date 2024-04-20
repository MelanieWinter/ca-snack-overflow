import { useEffect } from 'react';

export default function WebSocketConnection() {
    useEffect(() => {
        const socket = new WebSocket("ws://127.0.0.1:8080")
        console.log('SOCKET -->', socket)

        socket.addEventListener('open', () => {
            setTimeout(() => {
                console.log('#2 -->', socket)
                socket.send("Whaddup muthafuckkkaaaas!!!")
            }, 1000)
        })
    }, [])
    return null
}
