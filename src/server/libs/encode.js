const base64lib = require("base-64");
const utf8lib = require("utf8")
const chars = require('ramda')

function encode(input) {
    var input = input
    var utf8 = utf8lib.encode(input)
    var Base64 = base64lib.encode(utf8);
    var Chars = chars.length(Base64)

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    function getRandomInt(min, max) {
        min = Math.ceil(6);
        max = Math.floor(Chars);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function RandomLenght(min, max) {
        min = Math.ceil(5);
        max = Math.floor(10);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function StringMaker() {
        var CharsFirst1 = Base64
        var CharDivided = Chars / 2
        var stringone = CharsFirst1.split("", CharDivided)
        var stringtwo = stringone.toString();
        var stringout = stringtwo.split(",").join("");
        var Second = Base64.split(stringout).toString().split(",").join("");
        var FinalString = Second + stringout
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
        var stringout = stringout1 + stringout2 + "/" + randomChar + "/" + randomNumber + "/" + randomstringlenght + "/" + randomstringonstartuplenght

        return stringout
    }
    return EncryptedString(StringMaker())
}

module.exports.Encode = encode