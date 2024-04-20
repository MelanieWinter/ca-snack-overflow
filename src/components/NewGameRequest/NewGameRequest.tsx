// NewGameRequest.tsx
import { useEffect } from 'react';
import { useWebSocket } from '../../utilities/UseSocket';

export default function NewGameRequest() {
    const { socket } = useWebSocket();

    useEffect(() => {
        const newGameRequest = {
            name: 'melanie',
            host: { name: 'its me' },
        };
        console.log(socket)

        console.log('not in event listener', newGameRequest)

        socket.addEventListener('open', () => {
            console.log('in event listener --->', newGameRequest)
            socket.send(JSON.stringify(newGameRequest));
        });



        return () => {
            socket.close();
        };
    }, [socket]);

    return <p>New Game Request Sent!</p>;
}
