const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

//I used module.exports = and not module exports
module.exports = solc.compile(source, 1).contracts[':Lottery']; 