const async_hooks = require('async_hooks');
const fs = require('fs');

console.log('全局跟踪者id:', async_hooks.triggerAsyncId());
console.log('全局异步id:', async_hooks.executionAsyncId()); 

fs.open('./1.txt', 'r', (err, fd) => {
    console.log('fs.open.异步id:', async_hooks.executionAsyncId());
    console.log('fs.open.跟踪者id:', async_hooks.triggerAsyncId());
});