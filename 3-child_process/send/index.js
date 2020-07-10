const net = require('net');
const http = require('http');
const cp = require('child_process');

/**
 * 这个例子失败了，传了httpserver也没法用
 * 只能tcp.server或者socket
 */
const server = new http.createServer( );
server.listen( 4000, ( ) => {
    const worker = cp.fork('worker.js');
    // worker.send( 'server', server );
    server.on('request', ( req,res ) => {
        res.write(`hello nodejs ${worker.pid}`);
        res.end( );
    })
});

