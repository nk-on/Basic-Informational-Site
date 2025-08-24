require('dotenv').config();
const http = require("node:http");
const fs = require("node:fs");
// const PORT = process.env.PORT;
const PORT = process.env.PORT;
function writeHead(res, statusCode) {
  res.writeHead(statusCode, { "Content-type": "text/html" });
}
function sendHtml(res, filepath) {
  const indexHtml = fs.readFileSync(filepath, res);
  res.write(indexHtml);
}
const routes = {
  "/": "pages/index.html",
  "/about": "pages/about.html",
  "/contact": "pages/contact-me.html",
};
const server = http.createServer((req, res) => {
  const url = req.url;
  if (routes[url]) {
    writeHead(res, 200);
    sendHtml(res, routes[url]);
  } else {
    writeHead(res, 404);
    sendHtml(res, "pages/404.html");
  }
  res.end();
});
server.listen(PORT);
