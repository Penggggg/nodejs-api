process.on('message', ( t, server ) => {
    server.on('request', ( req,res ) => {
        res.write(`hello nodejs ${worker.pid}`);
        res.end( );
    })
});