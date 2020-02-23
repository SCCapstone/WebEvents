const express = require('express');
var multer = require('multer')
var cors = require('cors');
const app = express();
app.use(cors())

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
var upload = multer({ storage: storage }).single('file')
app.post('/upload', function (req, res) {

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
	  console.log("file downloaded to server");
    return res.status(200).send(req.file)
  })
});
//file is file location that is to be uploaded to client
//https://stackoverflow.com/questions/7288814/download-a-file-from-nodejs-server-using-express
app.get('/download', function(req, res){
	const file = '/home/ubuntu/WebEvents/WebEvents/server/public/1582482911741-test.ical';
	res.download(file);
});

//port running from mozilla docs
const http = require("http");
// hostname was 'localhost'
const hostname = 'http://ec2-3-133-106-204.us-east-2.compute.amazonaws.com';
const port = 8000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello World");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
//*
//server.listen(port, function () {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});
//end mozilla docs

//port to run on - if you change this change the proxy
//const port = process.env.PORT || 5000;
//console log for running port
app.listen(port, () => console.log('Listening on port 8000'));

//GET route that wwill be fetched from react
//the REACT(not server) application needds a proxy for this
//in client package.json under proxy (set it to port number)
app.get('/express_backend', (req, res) => {
	console.log('express_backend called');
  res.send({ express: 'Your express backend is connected to react' });
});
