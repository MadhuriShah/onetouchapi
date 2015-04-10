var express = require('express');
var app=express();
app.use(express.bodyParser());
//var twilio = require('twilio');
//var client = new twilio.RestClient('ACb29a92edc3fe2012ac9c6d2e6e381e14', 'c14726503c044f16807a6df4d390c214');
app.get('/', function (req, res) {
	var To=new Array('+15194643493','+12269327075');
	var From='+12267786035';
	var i=0;
	var s;
	while(i<2){
	myfunction(To[i],From);
	
	console.log(i);
	i++;
	}
	res.send(s)
	function myfunction(To,From){
	s +=To+From;
}	
});
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);
