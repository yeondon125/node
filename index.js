const express = require("express");
const { get } = require("express/lib/response");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dog", (req, res) => {
  res.send("강아지");
});

app.get("/cat", (req, res) => {
  res.send("고양이");
});
app.get("/user/:id", (req, res) => {
  // const p = req.params;
  // console.log(p);
  const q = req.query;
  console.log(q);
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
