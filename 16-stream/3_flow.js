/**
 * 水管流动：
 * 下方从水管流出数据时，调用上方的压入水管方法，read()触发push()
 * 
 * 上方压入水管后，调用下方的水管流出，push()触发read()
 */

const fs = require('fs');
fs.createReadStream('./0.txt')
    .pipe( process.stdout );