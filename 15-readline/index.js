const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('你如何看待 Node.js 中文网？', (answer) => {
    console.log(`感谢您的宝贵意见：${answer}`);
    rl.close();
});