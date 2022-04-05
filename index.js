const express = require("express");

const app = express();
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 8001;

app.get("/", (req, res) => {
  res.send("Hello Frontend! " + process.env.NODE_ENV);
});

app.listen(port, () => {
  console.log(`POC app listening on port ${port}`);
});
