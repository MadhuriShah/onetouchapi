var express = require('express');
var app=express();
app.use(express.bodyParser());
var twilio = require('twilio');
var client = new twilio.RestClient('ACb29a92edc3fe2012ac9c6d2e6e381e14', 'c14726503c044f16807a6df4d390c214');
app.post('/', function (req, res) {

	res.send('hello world');
});

app.get('/', function (req, res) {
	var To='+15194643493';
	var From='+12267786035';
	var Body='I am in danger';
	var i=1;
	while(i<=2){
	client.sms.messages.create(To,From,Body);
	i++;
	console.log(To[i]);
	}
	
client.sms.messages.create(To,From,Body)();
	res.send('hello '+To+From+Body);
});
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);
