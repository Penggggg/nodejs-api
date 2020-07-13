const stream = require('stream')

/**
 * 
 * 虽然上游一共有6个数据（ABCDEF）可以生产，但实际只生产了4个（ABCD）。 这是因为第一个数据（A）迟迟未能写完（未调用next()），所以后面通过write方法添加进来的数据便被缓存起来。 下游的缓存队列到达2时，write返回false，上游切换至暂停模式。 此时下游保存了AB。 由于Readable总是缓存state.highWaterMark这么多的数据，所以上游保存了CD。 从而一共生产出来ABCD四个数据
 * 
 * 所以：highWaterMark这个缓存位，会先从水管下方先“满”起来，直到水管上方缓存“满起来”，直到抑制了数据的产生
 */
var c = 0
const readable = stream.Readable({
  highWaterMark: 2,
  read: function () {
    process.nextTick(() => {
      var data = c < 6 ? String.fromCharCode(c + 65) : null
      console.log('push', ++c, data)
      this.push(data)
    })
  }
})

const writable = stream.Writable({
  highWaterMark: 2,
  write: function (chunk, enc, next) {
    console.log('write', chunk.toString( ))
    // 开关
    // next()
  }
})

readable.pipe(writable)