# Blockchain Medical Record Management — Prototype

An experimental application exploring patient, doctor, and appointment workflows backed by an Ethereum-compatible smart contract.

The repository includes a **Next.js / React UI**, **Web3 integration**, and a Solidity contract in [ethereum/contracts/Record.sol](ethereum/contracts/Record.sol).

> **Security warning:** This is an educational prototype, **not a safe place for real medical records**. The smart contract defines fields for personal and medical information. Public-chain data may be permanent and publicly readable. Never store real patient information in this project.

## Features represented in the source

- Patient registration and record-related pages
- Doctor registration, approval, and management pages
- Appointment management views
- Solidity structures for patients, doctors, and appointments
- Web3 contract integration and contract compilation/deployment scripts

## Technology

Next.js 13 · React 18 · Semantic UI React · Solidity · Web3 · Truffle HDWallet provider

## Project structure

```text
pages/                   # Next.js screens and flows
components/              # Shared UI components
ethereum/
  contracts/Record.sol   # Solidity records and related operations
  compile.js              # Contract compilation script
  deploy.js               # Contract deployment script
  record.js               # Frontend contract instance configuration
  web3.js                 # Browser/fallback provider configuration
test/                    # Existing test scripts
```

## Local development

1. Clone the repository and run `npm install`.
2. Configure a local test blockchain or suitable development RPC endpoint. For the browser fallback provider, set `NEXT_PUBLIC_RPC_URL` (example in [.env.example](.env.example)). Never expose private credentials in a browser-visible environment variable.
3. Start the UI with `npm run dev`.
4. The deployment script requires `DEPLOYER_MNEMONIC` and `POLYGON_RPC_URL` in the **deployment environment**. Use a newly generated test-only wallet; do not commit recovery phrases or RPC API keys.
5. The current project uses legacy Solidity syntax and Web3 tooling. Compiler and runtime versions may require alignment before compilation and deployment. Local and deployed behavior has **not** been verified for this documentation update.

## Critical security notice

Earlier public commits included a wallet recovery phrase and an RPC credential. Removing these values from the latest source **does not remove them from Git history**.

- Never reuse the previously exposed recovery phrase. Move any assets controlled by that wallet to a **new wallet created securely outside this repository**.
- Rotate or revoke the exposed RPC provider API key.
- Review other branches, forks, and commit history for additional credentials.
- Do not put real medical or identifying data on a public blockchain.

## Status and next steps

This is a historical portfolio prototype, not an audited or production-ready healthcare solution. Next priorities are compiler/dependency compatibility, automated tests, more accurate environment setup, and an end-to-end demo using synthetic data.

The original README referenced Flipkart Grid; this README now describes the code and its limits.
