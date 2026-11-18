const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledRecord = require('./build/Record.json');

// IMPORTANT: Use a NEW test-only wallet. Older commits publicly exposed a mnemonic.
// Never reuse that previously exposed wallet for real assets.
const mnemonic = process.env.DEPLOYER_MNEMONIC;
const rpcUrl = process.env.POLYGON_RPC_URL;

if (!mnemonic || !rpcUrl) {
  throw new Error('Set DEPLOYER_MNEMONIC and POLYGON_RPC_URL in your environment before deploying.');
}

const provider = new HDWalletProvider(mnemonic, rpcUrl);
const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting test deployment from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledRecord.interface))
      .deploy({ data: compiledRecord.bytecode })
      .send({ gas: '10000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
  } catch (error) {
    console.error('Contract deployment failed:', error);
    process.exitCode = 1;
  } finally {
    if (provider.engine && typeof provider.engine.stop === 'function') {
      provider.engine.stop();
    }
  }
};

deploy();
