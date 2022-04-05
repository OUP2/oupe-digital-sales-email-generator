const express = require("express");

const app = express();
const port = 8001;

app.get("/", (req, res) => {
  res.send("Hello Frontend!");
});

app.listen(port, () => {
  console.log(`POC app listening on port ${port}`);
});
