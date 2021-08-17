const { app, BrowserWindow } = require('electron')
var childProcess = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 850,
    height: 550
  })

  win.loadFile('electron_extensions/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

function startapi(scriptPath) {
  var process = childProcess.fork(scriptPath);
  process.on('exit', function () {
  console.log("Exitting")
});
}

startapi("../server/api.js")