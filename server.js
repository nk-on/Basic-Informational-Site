const http = require("node:http");
const fs = require("node:fs");
function writeHead(res, statusCode) {
  res.writeHead(statusCode, { "Content-type": "text/html" });
}
function sendHtml(res, filepath) {
  const indexHtml = fs.readFileSync(filepath, res);
  res.write(indexHtml);
}
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    writeHead(res, 200);
    sendHtml(res, "index.html");
  } else if (url === "/about") {
    writeHead(res, 200);
    sendHtml(res, "about.html");
  } else if (url === "/contact") {
    writeHead(res, 200);
    sendHtml(res, "contact-me.html");
  } else {
    writeHead(res, 404);
    sendHtml(res, "404.html");
  }
  res.end();
});
server.listen(8000);
