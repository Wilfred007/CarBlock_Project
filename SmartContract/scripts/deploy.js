const { ethers } = require("hardhat");

async function main() {

  const CarBlock = await ethers.getContractFactory("CarBlock");
  const carblock = await CarBlock.deploy();

  await carblock.deployed();

  console.log("CarBlock deployed to:", carblock.address);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
