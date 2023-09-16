require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
// require("./tasks/block-number");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  solidity: "0.8.8",
  etherscan:{
    apiKey:`MQJD5ATUNGFCH4INX8GVIBS2S6S5KYDCQS`,
  },
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/_-zOs27jNt3_BVyeWsPvwQWMUhWFzvJh',
      accounts:["8b73706537927788bee349a1711dabf01733cd3d3a469330348d791088d95f98"],
      chainId: 11155111,
    },

    localhost:{
      url:"http://127.0.0.1:8545/",
      chainId:31337,
    },
  },
};
