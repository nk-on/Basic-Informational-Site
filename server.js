const http = require("node:http");
const fs = require("node:fs");
function writeHead(res, statusCode) {
  res.writeHead(statusCode, { "Content-type": "text/html" });
}

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    writeHead(res, 200);
    const indexHtml = fs.readFileSync("index.html", "utf-8");
    res.write(indexHtml);
  } else if (url === "/about") {
    writeHead(res, 200);
    const indexHtml = fs.readFileSync("about.html", "utf-8");
    res.write(indexHtml);
  } else if (url === "/contact") {
    writeHead(res, 200);
    const indexHtml = fs.readFileSync("contact-me.html", "utf-8");
    res.write(indexHtml);
  } else {
    writeHead(res, 404);
    const indexHtml = fs.readFileSync("404.html", "utf-8");
    res.write(indexHtml);
  }
  res.end();
});
server.listen(8000);
