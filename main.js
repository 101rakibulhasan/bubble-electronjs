const {app,BrowserWindow,Menu, ipcMain} = require('electron')
const electron = require('electron');

var WIDTH = 320;
var HEIGHT = 580;
var OFFSIDE_X = 40;
var OFFSIDE_Y = 10;

ipcMain.on("msg",(event,data)=>{
    console.warn(data)
})
function createWindows()
{
    const win = new BrowserWindow({
        width:WIDTH,
        height:HEIGHT,
        x: electron.screen.getPrimaryDisplay().size.width - WIDTH - OFFSIDE_X,
        y: electron.screen.getPrimaryDisplay().size.height - HEIGHT - OFFSIDE_Y,
        frame: false,
        transparent: true,
        //backgroundColor: "#ff0000",
        //alwaysOnTop:true,
        title: "Awesoem",
        webPreferences:{
            nodeIntegration:true
        },
        resizable:false,
        //minimizable:false,

    })

    //let child = new BrowserWindow({parent:win})
    //child.loadFile("child.html");
    //child.show();
    win.loadFile("index.html");
    //win.setIgnoreMouseEvents(true);
    //win.setFocusable(false);
    //win.webContents.openDevTools();
    //ctrl shift i

}

app.whenReady().then(createWindows)