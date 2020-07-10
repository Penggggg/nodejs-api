const Koa = require('koa');
const app = new Koa( );

app.use( async ctx => {
    process.send(`some on come`);
    process.exit( 1 )
    ctx.body = `Hello World ${process.pid}`;
});

app.listen( 4000 );
console.log(`worker ${process.pid} is running`)