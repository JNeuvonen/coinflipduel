// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract CoinflipDuelFactory {
    address[] public deployedCoinflipDuels;
    mapping(string => bool) public deployedTables;

    function createCoinflipDuel(uint betsize, string memory name) public {
        require(!deployedTables[name]);
        deployedTables[name] = true;
        address newCoinflipDuel = address(new CoinflipDuel(betsize, name));
        deployedCoinflipDuels.push(newCoinflipDuel);
    }

    function getDeployedCoinflipDuels() public view returns(address[] memory) {
        return deployedCoinflipDuels;
    }

}

contract CoinflipDuel {

    struct Coinflip {
        address winner;
        address loser;
        uint betsize;
        uint blockTimestamp;
    }

    uint public betsize;
    address public player1 = address(0);
    address public player2 = address(0);
    uint public player1Bet = 0;
    uint public player2Bet = 0;
    bool internal locked;
    string public tableName;
    Coinflip[] public coinflips;


    constructor (uint enteredBetsize, string memory name) {
        betsize = enteredBetsize;
        tableName = name;
    }

    function withdraw() public noReentrant {
        require(msg.sender == player1);   

        require(player1Bet > 0);
        payable(player1).transfer(player1Bet);
        player1 = address(0);
        player1Bet = 0;
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
        uint winner = random() % 2;

      
        if (winner == 0) {

            Coinflip memory newCoinflip = Coinflip({
                winner: player1,
                loser: player2,
                betsize: getBalance(),
                blockTimestamp: block.timestamp
            });

            coinflips.push(newCoinflip);
        
            payable(player1).transfer(getBalance());
        }

        if (winner == 1) {

            Coinflip memory newCoinflip = Coinflip({
                winner: player2,
                loser: player1,
                betsize: getBalance(),
                blockTimestamp: block.timestamp
            });

            coinflips.push(newCoinflip);


            payable(player2).transfer(getBalance());
        }

        player1 = address(0);
        player2 = address(0);
        player2Bet = 0;
        player1Bet = 0;
    }

    function getBalance() public view returns(uint)  {
        return address(this).balance;
    }

    function getSummary() public view returns(Coinflip[] memory, string memory, uint, address, address, uint, uint) {
        return (coinflips, tableName, betsize, player1, player2, player1Bet, player2Bet);
    }

    modifier noReentrant() {
        require(!locked, "No re-entrancy");
        locked = true;
        _;
        locked = false;
    }
}
