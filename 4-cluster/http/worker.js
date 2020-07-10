const http = require('http');

http.createServer(( req, res ) => 
    res.end(`hello ${process.pid}`)
).listen( 4000 );

console.log(`worker ${process.pid} is running`)