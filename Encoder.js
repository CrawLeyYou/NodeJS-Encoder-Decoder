const base64lib = require("base-64");
const utf8lib = require('utf8');
const chars = require('ramda')

var input = process.argv[2];

var UTF8 = utf8lib.encode(input);
var Base64 = base64lib.encode(UTF8);
var Chars = chars.length(Base64)

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function getRandomInt(min, max) {
    min = Math.ceil(6);
    max = Math.floor(Chars);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function RandomLenght(min, max) {
    min = Math.ceil(5);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function firststring(CharsFirst) {
var CharDivided = Chars/2
var stringone = CharsFirst.split("", CharDivided)
var stringtwo = stringone.toString();
var stringout = stringtwo.split(",").join("");
return stringout
}

function secondstring(CharsFirst) {
     var Second = Base64.split(CharsFirst).toString().split(",").join("");
     return Second
}

function StringMaker() {
var String1 = firststring(Base64)
var String2 = secondstring(String1)
var FinalString = String2 + String1
return FinalString
}

function EncryptedString(String) {

var randomNumber = getRandomInt()
var randomlenght = RandomLenght()
var randomstring = makeid(randomlenght)
var randomChar = makeid(1)
var randomstringonstartup = (makeid(RandomLenght(5)))

var randomstringonstartuplenght = chars.length(randomstringonstartup)
var randomstringlenght = chars.length(randomstring)

var stringone = String.split("", randomNumber)
var stringtwo = stringone.toString().split(",").join("");
var stringout1 = randomstringonstartup + randomChar + stringtwo + randomstring
var stringout2 = String.split(stringtwo).toString().split(",").join("");
var stringout = stringout1 + stringout2 + "/" + randomChar +"/" + randomNumber +"/"+ randomstringlenght + "/" + randomstringonstartuplenght

return stringout
}

var EncString = EncryptedString(StringMaker())

console.log("Your Encrypted String is: " + EncString)
console.log("Base64 Decryption Starting in 2 second If there is a error occur you can get string from above and you can try manually decryption from anywhere (if decode result has anything from ur input u can try again)")
sleep(2000)
console.log("Encrypted String Base64 Decode Result: " + base64lib.decode(EncString))