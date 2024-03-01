const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(new Date());
});

app.listen(3004, () => {
  console.log("Ready");
});
