// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const ethers = require("hardhat");

async function main() {

  console.log("Deploying Contract....");
  const simpleStorageFactory = await ethers.ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await simpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment();

  console.log("Deployed Contract....");
  const address = await simpleStorage.getAddress();
  console.log(`Contrct Address : ${address}`);

  const currentValue = await simpleStorage.returnFromFirstContract();
  console.log(`Current Value : ${currentValue}`);

  console.log("Updating Current Value....");
  const deploymentTx = await (await simpleStorage.addToFirstContract(69));
  await deploymentTx.wait(1);
  const updatedValue = await simpleStorage.returnFromFirstContract();
  console.log(`Updated Value : ${updatedValue}`);

  // await simpleStorage.waitForDeployment(6);
  // await verify(address, []);
}
async function verify(contactAddress, args) {
  console.log("Verifying Contract....");
  try {
    await ethers.run("verify:verify", {
      address: contactAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().include("alredy verified")) {
      console.log("Already Verified");
    } else {
      console.log(e);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
