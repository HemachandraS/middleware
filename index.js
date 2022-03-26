const express = require("express");
const app = express();
app.listen(2200, () => {
  console.log("5000");
});
function allBooks(req, res, next) {
  console.log("Fetching all books");
  next();
}
app.get("/books",allBooks,(req, res) => {
  return res.send("allBooks");
});
function singleBook(req, res, next) {
  req.name=req.params.name
  next();
}
app.get("/book/:name", singleBook, (req, res) => {
  return res.send({bookName:req.name});
});