const cluster = require('cluster');
const cpus = require('os').cpus( ).length;

cluster.setupMaster({
    exec: 'worker.js'
});

for ( let i = 0; i < cpus; i++ ) {
    cluster.fork( )
}