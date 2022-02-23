const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", //allow all request from this domain:port
    // origin: "*", //allow every single request form every server
    // methods: ["GET", "POST"],
    // credentials: true,
  })
  //cors() without any options, will allow all the routes to be accessed anywhere on the web
);
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.get("/", (req, res) => {
  res.json({ name: "vasu" });
  //   res.send("response port: 5000");
});

app.get("/blogs", (req, res) => {
  let blogsPath = "../data/db.json";

  if (fs.existsSync(blogsPath)) {
    // console.log(path.resolve(__dirname, blogsPath));
    res.sendFile(path.resolve(__dirname, blogsPath));
    fs.readFile(blogsPath, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        // res.json(JSON.parse(data));
        // res.send(data.toString());
      }
    });
  } else {
    console.log("cannot read file from path: ", path);
  }
});

app.listen(5000, () => {
  console.log("listening to port: 5000");
});
