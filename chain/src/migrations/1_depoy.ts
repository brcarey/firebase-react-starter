/// <reference types="truffle-typings" />

import { FireTokenContract, MigrationsContract } from "../truffle";

const Migrations: MigrationsContract = artifacts.require("./Migrations.sol");
const Token: FireTokenContract = artifacts.require(
  "./FireToken.sol"
);

const migration: Truffle.Migration = async (deployer: Truffle.Deployer) => {
  deployer.deploy(Migrations);
  deployer.deploy(Token);
};

module.exports = migration;
