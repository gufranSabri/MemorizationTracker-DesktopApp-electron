const path = require('path');
const os = require('os');
const fs = require('fs');
const { app, BrowserWindow, ipcMain } = require('electron');


const isMac = process.platform === 'darwin';
let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 740,
        height: 700,
        icon: `${__dirname}\\assets\\icons\\Icon_256x256.png`,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });
    win.setMenuBarVisibility(false)
    win.loadFile('.\\renderer\\home.html');
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

//add surah to memorized list
ipcMain.on('update:memorized',(e,surahNumber)=>{
    let rawData = fs.readFileSync(path.join(__dirname,'db/data.txt'),'utf8')
    let memList = rawData.split("\n")[0].split(":")[1].split(",").map(function(item){return parseInt(item);})
    let revlist = rawData.split("\n")[1].split(":")[1].split(",").map(function(item){return parseInt(item);})

    if(surahNumber<0){
        let temp = []
        for (let i = 0; i < memList.length; i++) if(memList[i]!=surahNumber*-1)temp.push(memList[i])
        memList = temp

        let temp2 = []
        for (let i = 0; i < revlist.length; i++) if(revlist[i]!=surahNumber*-1)temp2.push(revlist[i])
        revlist = temp2
    }
    else if(!memList.includes(surahNumber)) memList.push(surahNumber)

    memList.sort(function(a, b){return a-b})
    revlist.sort(function(a, b){return a-b})

    let res = 'memlist:'
    for (let i = 0; i < memList.length; i++)res+=memList[i]+ (i==memList.length-1?'\nrevlist:':',')
    for (let i = 0; i < revlist.length; i++)res+=revlist[i]+ (i==revlist.length-1?'':',')

    fs.writeFile(path.join(__dirname,'db/data.txt'), res, function (err) {
        if (err) throw err;
        console.log('Memorization list updated!');
        win.webContents.send('update:done');
    });

})
//add surah to "to revise" list
ipcMain.on('update:revision',(e,surahNumber)=>{
    let rawData = fs.readFileSync(path.join(__dirname,'db/data.txt'),'utf8')
    let memList = rawData.split("\n")[0].split(":")[1].split(",").map(function(item){return parseInt(item);})
    let revlist = rawData.split("\n")[1].split(":")[1].split(",").map(function(item){return parseInt(item);})

    if(surahNumber<0){
        let temp = []
        for (let i = 0; i < revlist.length; i++) if(revlist[i]!=surahNumber*-1)temp.push(revlist[i])
        revlist = temp
    }
    else if(!revlist.includes(surahNumber)) revlist.push(surahNumber)

    memList.sort(function(a, b){return a-b})
    revlist.sort(function(a, b){return a-b})

    let res = 'memlist:'
    for (let i = 0; i < memList.length; i++)res+=memList[i]+ (i==memList.length-1?'\nrevlist:':',')
    for (let i = 0; i < revlist.length; i++)res+=revlist[i]+ (i==revlist.length-1?'':',')

    fs.writeFile(path.join(__dirname,'db/data.txt'), res, function (err) {
        if (err) throw err;
        console.log('Revision list updated!');
        win.webContents.send('update:done');
    });
})