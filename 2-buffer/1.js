console.log(`

================= 分配 =================

`)
console.log( '按量分配：', Buffer.alloc( 5 ))
console.log( '默认值分配，这里被截断了：', Buffer.alloc( 5, '呵' ))
console.log( '分配一个未被初始化的Buffer，它可能包含旧数据, 需要fill()、write()填充', Buffer.allocUnsafe( 5 ))

const bufm = Buffer.from('你好');
const bufu = Buffer.allocUnsafe( 6 );
console.log('复制：', bufu.copy( bufm ), bufu );
console.log('长度：', bufu.length );

console.log(`

================= 转换 =================

`)

console.log( '字符转字节：', Buffer.from('abc123'))
console.log( '数组转字节：', Buffer.from([ 1, 2, 3 ]))
console.log( '中文转字节：', Buffer.from('呵呵'))


console.log(`

================= Buffer和字符编码 =================

`)
const buf = Buffer.from('hello');
console.log('toString：默认为utf-8', buf.toString( ))
console.log('toString：', buf.toString('hex'))
console.log('toString：', buf.toString('base64'))
console.log('toString：', buf.toString('binary'))


console.log(`

================= 迭代 =================

`)

for ( let i of buf ) {
    console.log( i )
}

const bufx = Buffer.from('你好');
for( let i of bufx.entries( )) {
    console.log( i )
}

console.log(`

================= 拼接 =================

`)

const buf1 = Buffer.alloc( 3 );
const buf2 = Buffer.from('你');
console.log( 'concat后面是个数组：', Buffer.concat([ buf1, buf2 ]))


console.log(`

================= 查找 =================

`)

const buff = Buffer.from('this is a buffer')
console.log('includes 一般情况: ', buff.includes('this'));
console.log('includes Buffer类型: ', buff.includes( Buffer.from('this')));
console.log('includes ASCII类型,a是的十进制 ASCII 值：', buff.includes( 97 ))
console.log('includes ASCII类型,a是的16进制 ASCII 值：', buff.includes( 0x61 ))

const bufc = Buffer.from('你好');
console.log('indexOf: ', bufc.indexOf('你'));
console.log('indexOf: ', bufc.indexOf( Buffer.from('你')));