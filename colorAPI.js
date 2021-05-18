// Setup basic express server
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});


// Chatroom

let numUsers = 0;
// app.all('*', function (req, res, next) {
//   res.set('Access-Control-Allow-Origin', '*');
//   res.set('Access-Control-Allow-Credentials', true);
//   res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
//   res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, x-authorization');
//   if ('OPTIONS' === req.method) {
//     return res.sendStatus(200);
//   }
//   next();
// });


//THIS IS WHERE THE OBSERVER WILL CHANGE THE COLOR

app.get("/color/:username", (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  if (req.params.username === "p1") {
    res.send("#d60606") // to be replaced with #d60606
  }
  if (req.params.username === "r") {
    res.send("#f78b00")
  }
  res.send("#0000")

})

