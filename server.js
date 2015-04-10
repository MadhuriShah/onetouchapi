var express = require('express');
var app=express();
app.use(express.bodyParser());
var twilio = require('twilio');
var client = new twilio.RestClient('AC2c6df62a9c6349427f98bddc594df420', '08e1e5aeda14439fa14d137612cd1a5c');
app.get('/', function (req, res) {
	res.send('hello world');
});
app.get('/send', function (req, res) {
	var To=req.query.To;
	var From='+12267782157';
	var Body=req.query.Body;	
client.sms.messages.create({
   to:To,
   from:From,
   body:Body
}, function(error, message) {
   if (!error) {
       console.log('Success');
   } else {
       console.log('Error: '+error);
   }
},
client.calls.create({ 
	to: To, 
	from: "+12267782157", 
	url: "http://demo.twilio.com/docs/voice.xml",  
	method: "GET",  
	fallbackMethod: "GET",  
	statusCallbackMethod: "GET",    
	record: "false" 
}, function(err, call) { 
	console.log('Call Success:'+call.sid); 
}))
	//res.send('hello '+To+From+Body);
});
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ip);
