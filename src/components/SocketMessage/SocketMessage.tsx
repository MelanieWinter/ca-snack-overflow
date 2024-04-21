import { useEffect } from 'react'

export default function SocketMessage({ socket }) {
    useEffect(() => {
        socket.onmessage = (event: MessageEvent) => {
            const msg: Message = event.data
            addMessages(msg)
        }
    }, [])

    return (

    )
}