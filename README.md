# A Simple PoC for the Parity Multisig Wallet Hack

This is the code for a Proof of Concept of the Parity Multisig wallet Hack, in order to get this working you need to add an API key of nodes from a node provider like alchemy or infura, and another one from etherscan

Just make an account on alchemy, login or sign up, and get yourself an API key for the Ethereum Mainnet. There will be three types of key, copy the http one.
Then add this key inside the files : 
hardhat.config.js
  - In the url part, inside the empty apostrophes : ""

Again for the API key from etherscan, go to etherscan.io, hover on the resources tab in navbar, select 'developer APIs', once on the API page, select the free package below, make an account/ sign up.
Once logged in, go to others => API keys, and add an API key by clicking on the top right button.
Then add this key inside the file : 
hardhat.config.js
  - In the etherscan apikeys, inside the empty apostrophes : ""


Once the API keys are added, Follow the commands given below to run the PoC:

```shell
npx hardhat compile
npx hardhat test test/parity.js 
```
