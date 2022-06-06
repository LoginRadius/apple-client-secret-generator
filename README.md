# Sign in with Apple Client Secret Generation

## Introduction ##

This Script helps you create the client_secret required in the [Apple Sign-in Rest APIs](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api).

# Installing
In the root of the Repository, run

    $ npm install 

## Getting Started


1. Update the private key in the PrivateKey.p8 file.
2. As per the apple's document client_secret needs to be converted in the following JWT format 
```
{
    "alg": "ES256",
    "kid": "ABC123DEFG"
}
{
    "iss": "DEF123GHIJ",
    "iat": 1437179036,
    "exp": 1493298100,
    "aud": "https://appleid.apple.com",
    "sub": "com.mytest.app"
}
```
For Details insights, kindly check **"Creating the Client Secret section"** of the following Apple document : https://developer.apple.com/documentation/sign_in_with_apple/generate_and_validate_tokens 

Set the configuration in the config variable.

```
var config = {
    'kid' : 'key_id'
    'iss' : 'team_id',
    'iat' : Time.now.to_i,
    'exp' : Time.now.to_i + 86400*180,
    'aud' : 'https://appleid.apple.com',
    'sub' : 'client_id',
}
```

3. Run the npm start command to execute the script.

