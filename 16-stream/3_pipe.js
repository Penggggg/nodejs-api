/**
 * const fs = require('fs')
 * fs.createReadStream(file).pipe(writable)
 * 
 * writable内部维护了一个写队列，当这个队列长度达到某个阈值（state.highWaterMark）时， 执行write()时返回false，否则返回true。
 */


 /**
  * pipe核心代码
  */

 readable.on('data', function (data) {
    if (false === writable.write(data)) {
      readable.pause() // 水管停止
    }
  })
  
  writable.on('drain', function () {
    readable.resume() // 水管流动
  })