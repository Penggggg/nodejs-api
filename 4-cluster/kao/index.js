const cluster = require('cluster');
const cpus = require('os').cpus( ).length;

cluster.setupMaster({
    exec: 'worker.js'
});

for ( let i = 0; i < cpus; i++ ) {
    const worker = cluster.fork( );
    worker.on('message', r => {
        console.log( r );
        // worker.kill( ); // 主动杀死进程
    })
    worker.on('exit', ( code, signal ) => console.log(`Exit: ${code} ${signal}`))
}