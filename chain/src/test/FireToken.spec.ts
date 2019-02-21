import { FireTokenContract } from "../truffle";

const Token: FireTokenContract = artifacts.require("./FireToken.sol");

contract("FireToken", ([deployer, user1]) => {
  it("should return correct message for non-deployer", async () => {
    const expected = 100000;
    const token = await Token.new({ from: deployer });
    await token.mint(user1, expected, { from: deployer });
    const actual = await token.balanceOf(user1);

    expect(expected).to.eq(actual.toNumber());
  });
});
