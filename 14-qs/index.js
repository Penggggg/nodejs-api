const qs = require('querystring');

const obj = qs.parse('a=1')
console.log( obj )

console.log(`${qs.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })}`)