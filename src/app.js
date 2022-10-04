const express = require("express");
const { fetchData } = require("./firebase/fetchData");

const app = express();

app.get("/", async (req, res) => {
  const data = await Promise.all([fetchData()]);
  res.send(data);
});

app.listen(8080, () => {
  console.log("");
});
