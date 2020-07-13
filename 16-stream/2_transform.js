const Transform = require('stream').Transform

class Rotate extends Transform {
  constructor(n) {
    super()
  }

  // 将可写端写入的数据变换后添加到可读端
  _transform(buf, enc, next) {
    console.log('???', buf )
    // 调用push方法将变换后的数据添加到可读端
    this.push(`${buf}嘻嘻`)
    // 调用next方法准备处理下一个
    next()
  }

}

var transform = new Rotate(3)
transform.on('data', data => process.stdout.write(`${data}\n`))
transform.write('hello, ')
transform.write('world!')
transform.end()