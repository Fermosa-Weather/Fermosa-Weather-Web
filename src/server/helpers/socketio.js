const { Server } = require("socket.io");

const messages = [];
async function socketFunction(server) {

    const io = new Server(server, {
        cors: {
            origin: "*",
        },
    })

    io.on("connection", (socket) => {
        console.log("socket funcionando: " + socket.id);

        //ENVIAR ARRAY DE MENSAJES
        socket.emit('initialMessages', messages);

        socket.on("message", data => {

            messages.push(data)

            io.emit("message", data)
        })
    })
}

module.exports = {
    socketFunction,
    messages
}