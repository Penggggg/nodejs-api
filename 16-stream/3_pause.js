/**
 * 当readable.pause( )，进入暂停模式时
 * 需要下游显示调用read( )，促使水管的下方流输出数据
 * 而流，通过_read()中的push方法，将数据传给水管的上方
 * 
 * 
 * 当水管中的数据足够多时，调用read()不会引起_read()的调用
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

// 进入暂停模式
readable.pause()
readable.on('data', data => process.stdout.write('\ndata: ' + data))

var data = readable.read()

// 开关
while (data !== null) {
  data = readable.read()
}