const express = require("express");
const fetchData = require("./firebase/fetchData");

const app = express();

app.get("/", async (req, res) => {
  res.send("hello");
  const dd = await fetchData();
  console.log(dd);
});

app.listen(8080, () => {
  console.log("");
});
