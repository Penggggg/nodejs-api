const dns = require('dns');

dns.lookup('archive.org', ( err, ip ) => {
    console.log(`IP: ${ip}`);
    dns.reverse( ip, ( err, hostnames ) => {
        console.log(`反向查找：${hostnames}`)
    })
})