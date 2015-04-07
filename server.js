var express = require('express');
require("node_modules/twilio/lib");
var app = express();

var accountSid = 'AC2c6df62a9c6349427f98bddc594df420';
var authToken = "08e1e5aeda14439fa14d137612cd1a5c";
var client = require('twilio')(accountSid, authToken);
 
client.messages.create({
    body: "Jenny please?! I love you <3",
    to: "+15194643493",
    from: "+12267782157"
}, function(err, message) {
    process.stdout.write(message.sid);
});
app.get('/', function (req, res) {
	res.send('hello world');
});

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);
