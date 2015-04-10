var express = require('express');
var app=express();
var twilio = require('twilio');

// Create a new REST API client to make authenticated requests against the
// twilio back end
var client = new twilio.RestClient('AC2c6df62a9c6349427f98bddc594df420', '08e1e5aeda14439fa14d137612cd1a5c');

// Pass in parameters to the REST API using an object literal notation. The
// REST client will handle authentication and response serialzation for you.

app.get('/', function (req, res) {
client.sms.messages.create({
   to:'+15194643493',
   from:'+12267782157',
   body:'http://maps.apple.com/maps?ll=51.83733,-8.3016'
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
      // console.log(message.sid);

       console.log('Message sent on:');
       console.log(message.dateCreated);
   } else {
       console.log('Oops! There was an error.');
   }
}),
client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+15194643493",
    from: "+12267782157"
}, function(err, call) {
    //process.stdout.write(call.sid);
});
	res.send('hello world');
	

});
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);
