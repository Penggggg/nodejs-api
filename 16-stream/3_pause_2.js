/**
 * 如果read(n)的返回值为null，说明这次未能从水管中取出所需量的数据。
 * 
 * 此时，消耗方需要等待新的数据到达后再次尝试调用read方法。
 * 
 * 在数据到达后，流是通过readable事件来通知消耗方的
 */

const Readable = require('stream').Readable

// 底层数据
const dataSource = ['a', 'b', 'c']

const readable = Readable()
readable._read = function () {
  process.nextTick(() => {
    this.push(dataSource.shift() || null)
  })
}

readable.pause()
readable.on('data', data => process.stdout.write('\ndata: ' + data))

readable.on('readable', function () {
    while (null !== readable.read()) ;;
})
// while (null !== readable.read()) ;