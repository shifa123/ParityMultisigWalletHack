require("@nomiclabs/hardhat-waffle");
require("hardhat-etherscan-abi");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
module.exports = {
  networks: {
    hardhat: {
    chainId: 1,
    forking: {
      url: "",
      blockNumber: 4500000
      },
    }
  },
  etherscan: {
     apiKey: ""
  },
  solidity: {
    compilers: [
      {
      version: "0.8.0"
    },
  ]},
};
