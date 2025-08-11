export const setupQueueSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });

  // Middleware: Attach io to req in APIs
  io.use((socket, next) => {
    socket.request.io = io;
    next();
  });
};
