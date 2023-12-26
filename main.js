/* Test for console print
console.log('Hello World!') */

//app controls the application lifecycle - a camelCase module
// BrowserWindow creates and manages app windows - a PascalCade module
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

/* In electron BrowserWindows can only be created after the app ready event is fired. using app.whenReady() and calling createWindow() is ideal to ensure promise completion. Typically in JS you use the .on function to listen, but the .whenready avoids certain issues, link: https://github.com/electron/electron/pull/21972 */

app.whenReady().then(()=> {
    createWindow()
})

