import { createContext, useReducer } from "react";
import { chatReducer } from "../reducers/chatReducer"

export const ChatContext = createContext()

export const ChatProvider = ({ children }) => {

    //MANEJA LOS ESTADOS DEL CHAT
    const [chatState, dispatch] = useReducer(chatReducer, {
        activeChat: null,
        messages: []
    })

    return (

        <ChatContext.Provider value={{ chatState, dispatch }} >
            {children}
        </ChatContext.Provider>
    )
}