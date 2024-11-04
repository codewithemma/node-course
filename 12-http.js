const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("homepage");
  } else if (req.url === "/about") {
    res.end("about page");
  } else res.end("not found");
});

server.listen(3000, () =>
  console.log(`server started on port 3000;` + " press Ctrl-C to terminate....")
);
