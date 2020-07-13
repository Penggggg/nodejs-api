const { Readable } = require('stream');

/**
 * Readable例子
 */
class SomeReadable extends Readable {

    constructor( iterator ) {
        super( );
        this.iterator = iterator;
    }

    // 需要手动实现_read
    // 调用push(data)将数据放入可读流中供下游消耗
    _read( ) {
        const { done, value } = this.iterator.next( );
        // 必须调用push(null)来结束可读流
        this.push( done ? null : value )
    }
}

const iterator = function( limit ) {
    return {
        next: function ( ) {
            if ( limit-- ) {
                return { done: false, value: `${limit} \n` }
            }
            return { done: true }
        }
    }
}( 10 )

const readable = new SomeReadable( iterator );

// 监听`data`事件，一次获取一个数据
readable.on('data', data => process.stdout.write(data))

// 所有数据均已读完
readable.on('end', () => process.stdout.write('DONE'))