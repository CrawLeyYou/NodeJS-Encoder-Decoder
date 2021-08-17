function Encode() {
    var string = document.querySelector("input").value;
    if (string != "") {
    axios.get('http://localhost:80/api?string=' + string + "&" + "method=Encode")
        .then(function (response) {
            var data = response.data.response
            document.getElementById("output").innerHTML = data
        })
        .catch(function () {
            document.getElementById("output").innerHTML = "An error occured: Corrupted-Invalid string"
        })
    }
    else {
        document.getElementById("output").innerHTML = "You can't request blank string"
    }
}

function Decode() {
    var string = document.querySelector("input").value;
    if (string != "") {
    axios.get('http://localhost:80/api?string=' + string + "&" + "method=Decode")
        .then(function (response) {
            var data = response.data.response
            document.getElementById("output").innerHTML = data
            console.log(response.status)
        })
        .catch(function () {
            document.getElementById("output").innerHTML = "An error occured: Corrupted-Invalid string"
        })
    }
    else {
        document.getElementById("output").innerHTML = "You can't request blank string"
    }
}