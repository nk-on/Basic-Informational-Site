require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/contact-me.html"));
});
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages/404.html"));
});
app.listen(PORT, () => {
  console.log("I work");
});
