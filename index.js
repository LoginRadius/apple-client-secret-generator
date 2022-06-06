var jwt = require('jsonwebtoken');
var fs = require('fs');
const privateKey = fs.readFileSync("PrivateKey.p8");
// set the JWT payload
var config = {
    'kid' : 'key_id',
    'iss' : 'team_id',
    'exp': Math.floor(Date.now() / 1000) + (60 * 60),
    'iat': Math.floor(Date.now() / 1000) - 30,
    'aud' : 'https://appleid.apple.com',
    'sub' : 'client_id',
}
//Fetch the private key 
let JWTpayload = 
{
    'exp': config.exp,
    'iat': config.iat,
    'iss': config.iss,
    'aud': "https://appleid.apple.com",
    'sub': config.sub
}
let ClientSecret = jwt.sign(JWTpayload, privateKey, { algorithm: 'ES256' , header : {

    kid: config.kid,
    typ: undefined 
}});

// Print the ClientSecret in the Terminal
console.log(ClientSecret);


