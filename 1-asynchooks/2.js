const fs = require('fs')
const { createServer } = require('http');
const { executionAsyncId, createHook } = require('async_hooks');

createHook({
    init(asyncId, type, triggerAsyncId, resource) {
        const eid = executionAsyncId();
        fs.writeSync(
            1, `${type}(${asyncId}): trigger: ${triggerAsyncId} execution: ${eid}\n`);
    }
}).enable( );

createServer((req, res) => {
  res.end( 200 );
}).listen(3000);