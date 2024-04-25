import { AuthProvider } from './context/AuthProvider'
import { SocketProvider } from './context/SocketProvider.jsx'
import { ChatProvider } from './context/ChatProvider.jsx'
import { AppRoutes } from './routers/AppRouter.jsx'

export const App = () => {
    return (
        <ChatProvider>
            <AuthProvider>
                <SocketProvider>
                    <AppRoutes />
                </SocketProvider>
            </AuthProvider>
        </ChatProvider>
    )
}
