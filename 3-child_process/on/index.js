const { exec } = require('child_process');
const ls = exec('ls -lh /usr');

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程使用代码 ${code} 关闭所有 stdio`);
});

ls.on('exit', (code) => {
  console.log(`子进程使用代码 ${code} 退出`);
});