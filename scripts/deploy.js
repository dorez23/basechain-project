async function main() {
  const BaseToken = await ethers.getContractFactory("BaseToken");
  const token = await BaseToken.deploy();
  await token.deployed();
  console.log("BaseToken deployato su:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
