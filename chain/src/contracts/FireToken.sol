pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract FireToken  is ERC20Mintable {
    string public name = "Fire Token";
    string public symbol = "FT";
}
