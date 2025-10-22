require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "base_mainnet",
  networks: {
    base_mainnet: {
      url: "https://mainnet.base.org",
      accounts: ["<metti-la-tua-private-key-qui>"]
    }
  }
};
