const express = require("express");
const cors = require("cors");
const { generationSettings } = require("../generator/generatorLauncher");

const app = express();
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 8001;

const whitelist = [
  "http://localhost:3000",
  "https://carlosbermejo-oup.github.io",
];

exports.startServer = () => {
  app.use(cors({ origin: whitelist }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.listen(port, () => {
    console.log(`POC app listening on port ${port}`);
  });

  app.get("/", (req, res) => {
    res.send("Welcome to the API home!");
  });

  app.post("/getEmail", (req, res) => {
    const generatedEmail = generationSettings(
      req.body.receivesInvoice,
      req.body.receivesLicenses,
      req.body.platformType,
      req.body.isReturn
    );
    res.send(generatedEmail);
  });
};
