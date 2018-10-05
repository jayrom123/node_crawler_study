const child_process = require('child_process');
const os = require('os');

const childProcessLength = os.cpus().length - 1;
const execPath = __dirname + '/createFile.js';

const closeHandler = (code) => {
    console.log(`退出代码为${code}`)
}

for (let i = 0; i < childProcessLength; i++) {
    (function (index) {
        const workerProcess = child_process.fork(execPath, [index]);
        workerProcess.on('close', closeHandler)
        workerProcess.on('message', (message) => {
            console.log(message)
        })
    }(i))
}
