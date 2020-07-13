const events = require('events');

/**
 * 
 * 应用场景：
 * 
 * 1、隔离业务逻辑,
 * 2、应对事件与侦听器是多对一的情况
 */

console.log(`

================= 基础 =================
`);

const emitter = new events.EventEmitter( );
emitter.on('event', d => {
  console.log('触发事件', d );
});
emitter.emit('event', '123');


console.log(`

================= Koa =================
`);
const koa = require('koa')
const app = new koa( );

app.on('koa', function() {
    console.log('在 Koa 中使用 EventEmitter');
});

app.emit('koa');