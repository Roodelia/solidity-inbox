const assert = require('assert'); // make assertions for test
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor function using instances of web3 library

// set up instance; replace provider to link up with Rinkeby or Mainnet
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ 
            data: bytecode, 
            arguments: ['Hi there!'] // initial message
        }) 
        .send({ from: accounts[0], gas: '1000000' });
});

describe('inbox', () => {
    it('deploys a contract', ()=> {
        assert.ok(inbox.options.address); // check if address exist to make sure contract is deployed
    });
    
    it('has default message', async () => { // calling a function is still async
        const message = await inbox.methods.message().call(); // first () is to pass in the arguments for the function; second () is to customize how the function gets called
        console.log(message)
        assert.equal(message, 'Hi there!'); 
    });
});