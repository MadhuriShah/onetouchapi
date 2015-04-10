var express = require('express');
var app=express();
app.use(express.bodyParser());
var twilio = require('twilio');
var client = new twilio.RestClient('ACb29a92edc3fe2012ac9c6d2e6e381e14', 'c14726503c044f16807a6df4d390c214');
app.get('/', function (req, res) {

	res.send('hello world');
});

app.post('/', function (req, res) {
	var To=req.body.To;
	var From=req.body.From;
	var Body=req.body.Body;
	
	
client.sms.messages.create({
   to:To,
   from:From,
   body:Body
}, function(error, message) {
   // The HTTP request to Twilio will run asynchronously. This callback
   // function will be called when a response is received from Twilio
   // The "error" variable will contain error information, if any.
   // If the request was successful, this value will be "falsy"
   if (!error) {
       // The second argument to the callback will contain the information
       // sent back by Twilio for the request. In this case, it is the
       // information about the text messsage you just sent:
       console.log('Success! The SID for this SMS message is:');
       console.log(message.sid);

       console.log('Message sent on:');
       console.log(message.dateCreated);
   } else {
       console.log('Oops! There was an error.');
   }
})
	res.send('hello '+To+From+Body);
});
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);
