const app = require("express").Router();
const axios = require("../utils/axios");

app.get("/:url", async (req, res) => {
  let getUrl = req.params.url;
  try {
    const { data } = await axios.get(`?${getUrl}`);
    res.status(200).json(data);
  } catch {
    res.status(200).json("Something is wrong");
  }
});
