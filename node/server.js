const express = require('express');
const { encrypt } = require('../pkg/base64_lib.js');

const app = express();
const port = 8080;
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
/*
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
})); 
*/

app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/encrypt', function (req, res) {
  var cleartext = (req.body.cleartext);
  res.send(encrypt(cleartext))
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

