var electronInstaller = require('electron-winstaller')

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: "RoboRIO Dashboard Standalone-win32-x64",
    outputDirectory: "build/dist/installer64",
    authors: "Josh Bacon",
    exe: "RoboRIO Dashboard Standalone.exe"
})

resultPromise.then(
    () => console.log("It worked!"),
    (e) => console.log(e)
)