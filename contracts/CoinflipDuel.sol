// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract CoinflipDuelFactory {
    address[] public deployedCoinflipDuels;

    function createCoinflipDuel(uint betsize) public {
        address newCoinflipDuel = address(new CoinflipDuel(betsize));
        deployedCoinflipDuels.push(newCoinflipDuel);
    }

    function getDeployedCoinflipDuels() public view returns(address[] memory) {
        return deployedCoinflipDuels;
    }

}

contract CoinflipDuel {
    uint public betsize;
    address public player1 = address(0);
    address public player2 = address(0);
    uint public player1Bet = 0;
    uint public player2Bet = 0;


    constructor (uint enteredBetsize) {
        betsize = enteredBetsize;
    }

    function withdraw() public {
        require(msg.sender == player1);   

        if (msg.sender == player1) {
            require(player1Bet > 0);
            payable(player1).transfer(player1Bet);
            player1 = address(0);
            player1Bet = 0;
        }
    }
    function enterContract() public payable {
        require(player1 == address(0) || player2 == address(0));
        require(msg.value >= betsize);
        if (player1 == address(0)) {
            player1 = msg.sender;
            player1Bet = msg.value;
        } else {
            player2 = msg.sender;
            player2Bet = msg.value;
            initiateCoinflip();
        }
    }
    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, player1, player2)));
    }
    function initiateCoinflip() private {
        require(player1Bet > 0 && player2Bet > 0);
        uint winner = random() % 2 + 1;
        if (winner == 1) {
            payable(player1).transfer(getBalance());
        }
        if (winner == 2) {
            payable(player2).transfer(getBalance());
        }
        player2 = address(0);
        player2Bet = 0;
        player1 = address(0);
        player1Bet = 0;
    }
    function getBalance() public view returns(uint)  {
        return address(this).balance;
    }
}
