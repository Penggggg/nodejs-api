/** 
 * 暂停模式
 */

const Readable = require('stream').Readable

// 底层数据
const dataSource = ['a', 'b', 'c']

const readable = Readable()
readable._read = function () {
  if (dataSource.length) {
    this.push(dataSource.shift())
  } else {
    this.push(null)
  }
}

// 进入暂停模式，
// https://tech.meituan.com/2016/07/15/stream-internals.html
readable.pause()
readable.on('data', data => process.stdout.write('\ndata: ' + data))

var data = readable.read()
// 为了消耗流，需要显示调用read()方法
while (data !== null) {
  data = readable.read()
}
