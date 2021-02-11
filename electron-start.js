const { app, BrowserWindow, systemPreferences } = require("electron");
const reload = require("electron-reload");
const path = require("path");
const url = require("url");
const setupEvents = require("./installers/setupEvents");

if (setupEvents.handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

if (process.env.ELECTRON_START_URL) {
  reload(__dirname);
}

let mainWindow;

function mainWindowClosed() {
  mainWindow = null;
}

function allWindowsClosed() {
  if (process.platform !== "darwin") {
    app.quit();
  }
}

function createWindow() {
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "./src/index.html"),
      protocol: "file:",
      slashes: true,
    });
  const vibrancy = systemPreferences.isDarkMode() ? "ultra-dark" : "light";
  const mainWindowConfig = {
    vibrancy,
    title: "Epic Electron",
  };
  // Create the browser window.
  mainWindow = new BrowserWindow(mainWindowConfig);
  mainWindow.setFullScreen(true);
  mainWindow.loadURL(startUrl);

  mainWindow.loadURL("./src/index.html");

  mainWindow.on("closed", mainWindowClosed);
}

function appActivated() {
  if (mainWindow === null) {
    createWindow();
  }
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", allWindowsClosed);

app.on("activate", appActivated);
