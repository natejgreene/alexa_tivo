var config = require('./config.json');

var express     = require('express'),
    AlexaSkills = require('alexa-skills'),
    app         = express(),
    port        = process.env.PORT || 8080,
    alexaAppId  = config.alexaAppId
    alexa = new AlexaSkills({
        express: app, // required 
        route: "/", // optional, defaults to "/" 
        applicationId: alexaAppId // optional, but recommended 
    });

alexa.launch(function(req, res) {
 
    var phrase = "Welcome to the Alexa Tivo helper";
    var options = {
        shouldEndSession: false,
        outputSpeech: phrase,
        reprompt: "What was that?"
    };
 
    alexa.send(req, res, options);
});
 
alexa.intent('SendCommand', function(req, res, slots) {

    var command = slots["Command"].value
    var net = require('net');

    var tivoIp = config.tivoIp;
    var tivoPort = config.tivoPort;
    var client = new net.Socket();
    client.connect(tivoPort, tivoIp, function() {
	console.log('Connected and sending: ' + command.toUpperCase());
	client.write('IRCODE ' + command.toUpperCase() + '\r');
        client.destroy();
    });
 
    var phrase = command;
    var options = {
        shouldEndSession: true,
        outputSpeech: phrase,
        card: alexa.buildCard("Card Title", phrase)
    };
 
    alexa.send(req, res, options);
});
 
alexa.ended(function(req, res, reason) {
    console.log(reason);
});
 
app.listen(port);
