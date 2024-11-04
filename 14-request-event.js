const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("hello world");
// });

// using event emitter
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("mind blown 🤯");
});

server.listen(5000);
