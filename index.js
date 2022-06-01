// const spdy = require("spdy");
// const express = require("express");
// const fs = require("fs");
// const compression = require("compression");
// const { promisify } = require("util");
// const readFile = promisify(fs.readFile);
// const app = express();
// app.use(compression());
// app.use(express.static("public"));
/*app.get("/", async function (req, res) {
    try {
        if (res.push) {
            [
                "/js/foo.js",
                "/js/bar.js",
                "/images/europe.jpg"
            ].forEach(async function (file) {
                res.push(file, {}).end(await readFile(`public${file}`))
            })
        }
        res.writeHead(200)
        res.end(await readFile("index.html"))
    } catch (error) {
        res.status(500).send(error.toString())
    }
})*/
// app.get("/", async function (req, res) {
//   try {
//     res.writeHead(200);
//     res.end(await readFile("index.html"));
//   } catch (error) {
//     res.status(500).send(error.toString());
//   }
// });
// spdy
//   .createServer(
//     {
//       key: fs.readFileSync("./server.key"),
//       cert: fs.readFileSync("./server.crt"),
//     },
//     app
//   )
//   .listen(8000, function (err) {
//     if (err) {
//       throw new Error(err);
//     }
//     console.log("Listening on port https://localhost:8000");
//   });

/* GZIP WITH HTTP

var express = require("express");
var app = express();
var path = require("path");
// var compression = require("compression");

// app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function (req, res) {
  res.send("pong");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(8000, function () {
  console.log("Listening on port http://localhost:8000");
});
*/

// GZIP WITH HTTP2
var path = require("path");
const express = require("express");
const compression = require("compression");
const app = express();
app.use(compression());
const port = process.env.PORT || 3000;
// const spdy = require("spdy");
// const fs = require("fs");
// const { promisify } = require("util");
// const readFile = promisify(fs.readFile);
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function (req, res) {
  res.send("pong");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// spdy
//   .createServer(
//     {
//       key: fs.readFileSync("./server.key"),
//       cert: fs.readFileSync("./server.crt"),
//     },
//     app
//   )
app.listen(port, function (err) {
  if (err) {
    throw new Error(err);
  }
  console.log("Listening on port http://localhost:8000");
});
