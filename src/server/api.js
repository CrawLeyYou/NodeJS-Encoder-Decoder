var express = require('express')
var decodelib = require('./libs/decode.js')
var encodelib = require('./libs/encode.js')
var app = express()
var port = 80

app.listen(port, () => {
  console.log("API started and Listening on port " + port);
});

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get("/", function (req, res) {
res.redirect("/api")
//maybe i will make page for here in the future but for now there is just direct
})

app.get('/api', function (req, res) {
  var method = req.query["method"]
  var string = req.query["string"]
  if (method != undefined) {
    if (string != undefined) {
      if (method == "Decode" && "decode") {
        console.log("Decoding Requested")
        if (decodelib.Decode(string) != "") {
          res.jsonp({
            response: decodelib.Decode(string)
          })
          console.log("Response Sended")
        } else {
          res.status(400).jsonp({
            response: "Invalid-Corrupted-Blank string."
          })
        }

      } else {
        if (method == "Encode" && "encode") {
          console.log("Encoding Requested")
          if (encodelib.Encode(string) != "") {
            res.jsonp({
              response: encodelib.Encode(string)
            })
            console.log("Response Sended")
          } else {
            res.status(400).jsonp({
              response: "Blank string."
            })
          }
        }
      }
    } else {
      res.status(400).jsonp({
        response: "There is no string"
      })
    }
  } else {
    if (string != undefined) {
      res.status(400).jsonp({
        response: "There is no method"
      })
    } else {
      res.status(400).jsonp({
        response: "There is no method and string"
      })
    }
  }
})