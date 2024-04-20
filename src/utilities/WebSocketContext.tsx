import React, { createContext, useContext, useEffect, ReactNode, useMemo } from 'react';

// Define the WebSocket context type
export type WebSocketContextType = {
    socket: WebSocket | null
};

// Create the WebSocket context
export const WebSocketContext = createContext<WebSocketContextType>({ socket: null });

// Custom hook to access the WebSocket context
// export function useWebSocket() {
//     const context = useContext(WebSocketContext);
//     if (!context) {
//         throw new Error('useWebSocket must be used within a WebSocketProvider');
//     }
//     return context;
// };

// Props for the WebSocketProvider component
type WebSocketProviderProps = {
    children: ReactNode; // Accepts any ReactNode as children
};

// WebSocketProvider component
export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
    // Initialize the WebSocket instance
    const socket = useMemo(() => new WebSocket("ws://localhost:8080"), []);

    // Clean up the WebSocket connection when unmounted
    useEffect(() => {
        return () => {
            socket.close();
        };
    }, [socket]);

    // Provide the WebSocket context to children
    return (
        <WebSocketContext.Provider value={{ socket }}>
            {children}
        </WebSocketContext.Provider>
    );
};
