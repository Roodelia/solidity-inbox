const assert = require('assert'); // make assertions for test
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor function using instances of web3 library

// set up instance; replace provider to link up with Rinkeby or Mainnet
const web3 = new Web3(ganache.provider());

