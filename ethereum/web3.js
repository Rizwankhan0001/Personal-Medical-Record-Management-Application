import Web3 from 'web3';

// Browser-side NEXT_PUBLIC_* values are visible to visitors.
// Use a restricted test endpoint or a backend proxy, not a private API key.
const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || 'http://127.0.0.1:8545';

let web3;
if (typeof window !== 'undefined' && window.ethereum) {
  web3 = new Web3(window.ethereum);
} else if (typeof window !== 'undefined' && window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));
}

export default web3;
