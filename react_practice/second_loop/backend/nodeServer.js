const http = require("http");
const port = 3110;
http
  .createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.statusCode = 200;
    res.write("<h1>hello from nodejs<h1/>");
    res.end();
  })
  .listen(port, "localhost", () => {
    console.log("listening to server on port:", port);
  });
