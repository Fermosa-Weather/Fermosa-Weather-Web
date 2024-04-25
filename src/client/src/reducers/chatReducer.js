import { types } from "../types/type";

export const chatReducer = (chatState, action) => {

    switch (action.type) {
        //USUARIOS ACTIVOS
        case types.ACTIVE_USERS:
            return {
                ...chatState, // <-- Cambiado de ...state a ...chatState
                usuarios: [...action.payload]
            }

        //CHAT ACTIVO
        case types.ACTIVE_CHAT:
            return {
                ...chatState,
                activeChat: [...action.payload]
            }

        //NUEVOS MENSAJES
        case types.NEW_MESSAGE:
            if (chatState.activeChat == action.payload.from || chatState.activeChat == action.payload.to) {
                return {
                    ...chatState,
                    messages: [...chatState.messages, action.payload]
                }
            } else {
                return chatState;
            }

        //CARGAR MENSAJES
        case types.LOAD_MESSAGES:
            return {
                ...chatState,
                messages: action.payload
            }

        default:
            return chatState;
    }
};
