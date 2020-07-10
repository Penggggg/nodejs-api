const cp = require('child_process');

// 方法是同步的，并且将会阻塞 Node.js 事件循环、暂停任何其他代码的执行，直到衍生的进程退出。
cp.execSync('node worker.js', ( err, stdout, srterr ) => {
    console.log(`err: ${err}, stdout: ${stdout}, srterr: ${srterr}`)
})

console.log('worker is done');