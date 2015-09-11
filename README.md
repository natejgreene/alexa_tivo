# alexa_tivo
Alexa Skill Tivo remote control.  Using the Network Remote Control on the Tivo and the Alexa Skills Kit via the Amazon Echo you can control your Tivo. This app is currently a very simplistic. It takes commands such as "Play" and "Pause" and sends them directly to the Tivo.


Tivo Network Remote Documentation:
`http://www.tivo.com/assets/images/abouttivo/resources/downloads/brochures/TiVo_TCP_Network_Remote_Control_Protocol.pdf`

Follow instructions for getting started with Alexa Skills:

`https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide`


## Requirements
* Node
* Express

## Installation Instructions



Clone the repo:
```bash
git clone git@github.com:natejgreene/alexa_tivo.git
```
Install Dependencies:
```bash
npm install
```
Copy config_example.json to config.json:
```bash
cp config_example.json config.json
```

Modify config.json to use your tivo ip address and Alexa App Id

If you want to run as a service
Modify parameters in init.d/alexa-tivo and then:
```bash
cp  init.d/alexa-tivo /etc/init.d/alexa-tivo
update-rc.d alexa-tivo defaults
```

Enable the network remote control on your Tivo


## Contact

Nate Greene

- https://github.com/natejgreene
- http://twitter.com/natejgreene
