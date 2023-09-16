const { tasks } = require("@nomicfoundation/hardhat-toolbox");

tasks("block-number", "print current block number").setAction(
    async (taskArgs, hre) => {
        const BlockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`Block Number : ${BlockNumber}`);
    }
);