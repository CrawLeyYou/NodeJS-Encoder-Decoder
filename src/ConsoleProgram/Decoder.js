const base64lib = require("base-64");
const utf8lib = require('utf8');
const chars = require("ramda")

var Encrpytedinput = process.argv[2];

function Decode(){
    var SF = Encrpytedinput.split("/");
    var ESC = SF[1]
    var RN = SF[2]
    var RNSL = SF[3]
    var RSOSL = SF[4]

var SFS = Encrpytedinput.split("", RSOSL).toString().split(",").join("");
var SFS2 = Encrpytedinput.split(SFS).toString().split(",").join("").split("/");
var SFS3 = SFS2[0].replace(ESC, "");
var SFS4 = SFS3.split("", RN).toString().split(",").join("")
var SFS5 = SFS3.split(SFS4).toString().split(",").join("")
var SFS6 = SFS5.split("", RNSL).toString().split(",").join("")
var SFS7 = SFS5.split(SFS6).toString().split(",").join("")
var SFS8 = SFS4 + SFS7
var SFS9 = chars.length(SFS8)
var test = SFS8.length
var SFS10 = SFS9/2
var SFS11 = SFS8.split("", SFS10).toString().split(",").join("");
var SFS12 = SFS8.split(SFS11).toString().split(",").join("");
var SFSFinal = SFS12 + SFS11
var Output1 = base64lib.decode(SFSFinal);
var Output2 = utf8lib.decode(Output1)
return Output2
}

console.info("Your Encrypted input is: " + Encrpytedinput)
console.info("Your Decrypted string is: " + Decode())
 
