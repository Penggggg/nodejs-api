/**
 * 如果不使用流，
 * 先把资源“读”进内存，再写。文件过大的情况下，会导致内存崩溃 + 处理速度慢
 * 
 * 流，则相当于把源拆分成小块，一块一块的运输
 */

const fs = require('fs');
const Stream = require('stream');

/**
 * 文件输出
 */
fs.createReadStream('./0.txt')
    .pipe( process.stdout );