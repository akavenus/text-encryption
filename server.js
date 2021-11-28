//imports
const express = require('express');
const bodyParser = require('body-parser'); 
const encryptFile = require('./strategy/encrypt.js')
const decryptFile = require('./strategy/decrypt.js')
//global stuff
const app = express()
app.use(bodyParser.json()); 
const colors = require('colors')
const PORT = 8080;

//request options
app.post('/encryptMessage', async function (req, res) {
    console.log(`|`.blue, '----------------------------------------------------')
    console.log(`|`.blue, `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`.cyan, `Encryption request recieved`.blue)
    var encryptedResponse = await encryptFile.encrypt(req.body.message)
    console.log(`|`.blue, `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`.cyan, `Message Encrypted`.blue)
    console.log(`|`.blue, '----------------------------------------------------')
    return res.send({
        encryptedResponse: encryptedResponse
    });
});

app.post('/decryptMessage', async function (req, res) {
    console.log(`|`.blue, '----------------------------------------------------')
    console.log(`|`.blue, `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`.cyan, `Decryption request recieved`.blue)
    var decryptedResponse = await decryptFile.decrypt(req.body.message.split(","), req.body.num1)
    console.log(`|`.blue, `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`.cyan, `Message Decrypted`.blue)
    console.log(`|`.blue, '----------------------------------------------------')
    return res.send({
        decryptedResponse: decryptedResponse
    });
});
//start
app.listen(PORT, () => {
    console.log(`|`.blue, `Message API listening at http://localhost:${PORT}`.cyan)
});