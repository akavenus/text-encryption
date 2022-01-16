//module imports
const fs = require('fs')

//global functions
function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

async function encrypt(str){
    let strategy = JSON.parse(fs.readFileSync('./strategy/encrypt.json'));
    var ranNum1 = rand(111111, 999999)
    var arr = []
    for (var i = 0; i < str.length; i++) {
        if (!str.charAt(i) || !str.charAt(i).trim()){
            arr.push('^ ')
        }
        else {
            arr.push(strategy[str.charAt(i)] * ranNum1)
        }
    }
    return {
        encrypt: arr.toString(),
        num1: ranNum1 * 2
    }
}
//arr.toString().split(",")
module.exports.encrypt = encrypt