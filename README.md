# NodeJS-Encoder-Decoder

[![Size](https://img.shields.io/github/languages/code-size/CrawLeyYou/NodeJS-Encoder-Decoder)]()
[![License](https://img.shields.io/github/license/CrawLeyYou/NodeJS-Encoder-Decoder)]()
[![Stars](https://img.shields.io/github/stars/CrawLeyYou/NodeJS-Encoder-Decoder)]()
[![Release](https://img.shields.io/github/v/release/CrawLeyYou/NodeJS-Encoder-Decoder)]()

This repository contains an encoder and decoder that inverts the actual base64 output and adds junk strings and encrypts it.

# Installation
Firstly install [NodeJS](https://nodejs.org/en/) with [npm](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/) and after choose your usage type. If you want to use GUI Version you need to install dependencies in the electron and server folder (libs included) you can install easily by typing: 
``` 
npm i
```
to CMD or anything else you using.

# Example of Usage with Console:
```
node Encoder.js "Haha decode pew pew3169"

Your Encrypted String is: tOEvLzcGV3IHBldzMxNjk=SGFoYXAxIDSBkZWNvZGUg/z/21/5/5
```
```
node Decoder.js "tOEvLzcGV3IHBldzMxNjk=SGFoYXAxIDSBkZWNvZGUg/z/21/5/5"

Your Encrypted input is: tOEvLzcGV3IHBldzMxNjk=SGFoYXAxIDSBkZWNvZGUg/z/21/5/5
Your Decrypted string is: Haha decode pew pew3169
```
# Example of Usage with Electron
After installing all dependencies (also don't forget to install all server dependencies) you need to type ``` npm start ``` in the electron folder for start electron.

![Electron](https://cdn.discordapp.com/attachments/731248412988670103/877107277058936852/fXe40tQEqP.gif)
# Comments

If you use repetitive sentences / special letters, the program may fail because "/" will occur in between, I haven't fixed it yet because I don't want to spend all my day on this. And sometimes the encrypted string is semi-readable in base64 decoding in 1.0.0 and 1.3.0 If you want the resulting string to be fully encrypted, you can check from any online base64 decoder. Also, you can use libs in the server as a node module

# License
This project is licensed under [MIT](https://opensource.org/licenses/MIT) license.