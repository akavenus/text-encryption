//module imports
const fs = require('fs')

//global functions
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

async function decrypt(arr, num1){
    let strategy = JSON.parse(fs.readFileSync('./strategy/encrypt.json'));
    var decrypt = []
    for (var i = 0;i < arr.length; i++){
        if (arr[i] === '^ '){
            decrypt.push(getKeyByValue(strategy,arr[i]))
        }
        else {
            decrypt.push(getKeyByValue(strategy,arr[i] / (num1/2)))
        }
    }
    var text = decrypt.join('')
    var final = text.split("").filter(function(c){ 
        return c != "^";
    }).join("");
    return final
}
module.exports.decrypt = decrypt