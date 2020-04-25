/**
 * The server is used to hand template files to the client.
 * The get endpoints must match the spelling of the scheduler type from dropdown menu.
 *
 */
const express = require("express");
var multer = require("multer");
var cors = require("cors");
const app = express();
app.use(cors());
/**
 * the destination cd "public" is the file location that the server pulls from
 */
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage }).single("file");
app.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    console.log("users are uploading file to server");
    return res.status(200).send(req.file);
  });
});
//port running from mozilla docs
const http = require("http");
/**
 * localhost hostname when developing
 */
const hostname = "http://ec2-3-133-106-204.us-east-2.compute.amazonaws.com";
const port = 8000;

//port to run on - if you change this change the proxy
//const port = process.env.PORT || 5000;
//console log for running port
app.listen(port, () => console.log("Listening on port 8000"));

//GET route that wwill be fetched from react
//the REACT(not server) application needds a proxy for this
//in client package.json under proxy (set it to port number)
app.get("/express_backend", (req, res) => {
  console.log("express_backend called");
  res.send({ express: "Your express backend is connected to react" });
});

/**
 * the below get endpoints are for downloading the scheduler test file
 *
 */
app.get("/seminar", function (req, res) {
  console.log("user downloading: ");
  const file = "../server/public/SchedulingAppTestFile.csv";
  res.download(file);
  //res.sendFile = "WebEvents/server/public/SchedulingAppTestFile.csv";
});
app.get("/field", function (req, res) {
  console.log("user downloading: ");
  const file = "../server/public/SchedulingAppTestFile.csv";
  res.download(file);
  //res.sendFile = "WebEvents/server/public/SchedulingAppTestFile.csv";
});
app.get("/work", function (req, res) {
  console.log("user downloading: ");
  const file = "../server/public/worktest3.csv";
  res.download(file);
  //res.sendFile = "WebEvents/server/public/SchedulingAppTestFile.csv";
});
