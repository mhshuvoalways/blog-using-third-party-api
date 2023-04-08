require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("./utils/axios");
const path = require("path");

const app = express();
app.use(cors());

app.get("/api/:url", async (req, res) => {
  let getUrl = req.params.url;
  try {
    const { data } = await axios.get(`?${getUrl}`);
    res.status(200).json(data);
  } catch {
    res.status(200).json("Something is wrong");
  }
});

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "client", "build", "index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening at ${port}`);
});
