/**
 * 
 * Node用C++实现了加密算法
 * 然后用JS调用这个模块
 * 
 * （用纯JS实现会很慢）
 */
const crypto = require('crypto');

console.log(`

================= 普通Hash =================

`);

const hash1 = crypto.createHash('md5'); // 可选，sha1，sha256，sha512，后2个更安全。
hash1.update('Hello');
console.log( 'Hash-md5: ', hash1.digest('hex'))


const hash2 = crypto.createHash('sha512');
hash2.update('Hello');
console.log( 'Hash-sha512: ', hash2.digest('hex'))


console.log(`

================= Hmac（加盐） =================

`);

const hmac1 = crypto.createHmac('md5', 'i am secrect');
hmac1.update('Hello');
console.log( 'hmac1-md5: ', hmac1.digest('hex'))


console.log(`

================= 对称加密AES =================

`);

/**
 * algorithm用于指定加密算法，如aes-128-ecb、aes-128-cbc等
 * 这里的密钥key必须是8/16/32位，如果加密算法是128，则对应的密钥是16位，如果加密算法是256，则对应的密钥是32位
 */
function genSign1(src, key, iv) {
    let sign = '';
    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    sign += cipher.update(src, 'utf8', 'hex');
    sign += cipher.final('hex');
    return sign;
}

// 解密
function deSign1(sign, key, iv) {
    let src = '';
    const cipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    src += cipher.update(sign, 'hex', 'utf8');
    src += cipher.final('utf8');
    return src;
}

const key = '9vApxLk5G3PAsJrM';
const iv = 'FnJL7EDzjqWjcaY9';

const crypted2 = genSign1('hello world', key, iv);
const decrypted2 = deSign1( crypted2, key, iv );

console.log(`createCipheriv： `, crypted2 )
console.log(`createDecipheriv `, decrypted2 )


console.log(`

================= Diffie-Hellman（双方协商一个密钥） =================
https://www.liaoxuefeng.com/wiki/1022910821149312/1023025778520640
`);

// xiaoming's keys:
var ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

// xiaohong's keys:
var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

// exchange and generate secret:
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));


console.log(`

================= RSA 非对称加密  =================
`);

const fs = require('fs');
function loadKey(file) {
    return fs.readFileSync(file, 'utf8');
}

let
    prvKey = loadKey('./rsa-prv.pem'),
    pubKey = loadKey('./rsa-pub.pem'),
    message = 'Hello, world!';

    let enc_by_prv = crypto.privateEncrypt(prvKey, Buffer.from(message, 'utf8'));
    console.log('私加：' + enc_by_prv.toString('hex'));
    
    
    let dec_by_pub = crypto.publicDecrypt(pubKey, enc_by_prv);
    console.log('公解： ' + dec_by_pub.toString('utf8'));

    // 使用公钥加密:
let enc_by_pub = crypto.publicEncrypt(pubKey, Buffer.from(message, 'utf8'));
console.log('公加： ' + enc_by_pub.toString('hex'));

// 使用私钥解密:
let dec_by_prv = crypto.privateDecrypt(prvKey, enc_by_pub);
console.log('私改：', dec_by_prv.toString('utf8'));