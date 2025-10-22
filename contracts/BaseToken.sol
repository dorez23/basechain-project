// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract BaseToken {
    string public name = "BaseToken";
    string public symbol = "BASE";
    uint8 public decimals = 18;
    uint public totalSupply = 1_000_000 * 10 ** uint(decimals);

    mapping(address => uint) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }
}
