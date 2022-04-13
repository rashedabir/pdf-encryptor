const express = require("express");
const path = require("path");
const Processor = require("encrypt-decrpt-pdf").PDFProcessor;

const app = express();

const password = "rashed";
const username = "2155";

const processor = new Processor(password, username);

const sourcepath = path.join(__dirname, "./out.pdf");
const destpath = path.join(__dirname, "./test.pdf");

processor
  .encrypt(destpath, sourcepath)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("server running...");
});
