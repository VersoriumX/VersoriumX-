import {HardhatUserConfig} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/UE_LMmz6c5mpZ6S64RAuZ2da6GaFtclC',
      accounts: ['a71edbf7d9e2cf6a944a3ace7618df39542baef04b96dfe27976b10c83549c81'],
    },
  },
};

export default config;
