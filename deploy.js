const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'canvas rubber option chimney drive pretty awkward defy world rifle minute sure',
    'https://rinkeby.infura.io/v3/fd2738eb2b1946baabfba08d8082fe31'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['Hi there!']
        })
        .send ({ gas: '1000000', gasPrice: '5000000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
}; // using this to enable async-await

deploy();

// deploy with: node deploy.js