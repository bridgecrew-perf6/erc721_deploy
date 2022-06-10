//migration/1_initial_migration.js

const Migrations = artifacts.require("Migrations");
const MyNFTs = artifacts.require("MyNFTs.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyNFTs);
};
