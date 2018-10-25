const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ isWorking: true });
});

app.listen(3000, () => console.log("app working!"));
