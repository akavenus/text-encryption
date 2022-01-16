
Your own text encryption server!

Steps to set up the text encryption server
1: Download Postman (https://www.postman.com/downloads/), you will use this software to send request to decrypt and encrypt messages
2: Run npm i fs express body-parser, these are all the required npm packages to use the text encryption server
3: Run strategyGen.js in the strategy directory, this will generate your encryption strategy and write it in the encrypt.json file
4: Run server.js in the main directory, this will start your server (it will be hosted off your local pc)

Encryption 
Pathway: encryptMessage
Body: {
    "message": "Message you want to encrypt"
}
Response: {
    "encryptedResponse": {
        "encrypt": "Encrypted Message",
        "num1": Number used to decode your message, this is very important to keep secret
    }
}

Decryption
Pathway: decryptMessage
Body: {
    "message": "Encrypted Message", 
    "num1": The number you recieved in your encryption response
}
Response" {
    "decryptedResponse": "Decrypted message"
}
