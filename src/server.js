require('dotenv').config();
const request = require('request');
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const getToken = (url, callback) => {

    const options = {
        url: process.env.GET_TOKEN,
        uri:'https://id.twitch.tv/oauth2/token',
        json:true,
        body: {
            client_id: client_id,
            client_secret: client_secret,
            grant_type: 'client_credentials',
        }
    };

    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log('status: ${res.statusCode}');
        console.log(body);

        callback(res);
    });
};

var AT = '';

getToken(process.env.GET_TOKEN, (res) => {
   AT = res.body.access_token;
   return AT;
})

setTimeout (() => {
    console.log(AT); 
}, 1000)
