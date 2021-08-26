const path = require('path'); // make sure valid path regardless of OS
const fs = require('fs');
const solc = require('solc');

// specify the path
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// read contents of the file instead of require
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];