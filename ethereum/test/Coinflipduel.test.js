const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const HDWalletProvider = require('@truffle/hdwallet-provider')

const compiledFactory = require('../build/CoinflipDuelFactory.json')
const compiledCoinflipDuel = require('../build/CoinflipDuel.json')
const rinkebyProvider = new HDWalletProvider(
  'edge life level pulse garage glove exit forest vocal air adjust illegal',
  // remember to change this to your own phrase!
  'https://rinkeby.infura.io/v3/dfbc43ef38b54878b7865bca83ebc173'
  // remember to change this to your own endpoint!
)
const rinkeby = new Web3(rinkebyProvider)

const defaultGas = '1000000'
let accounts
let factory
let coinflipDuelAddress
let coinflipDuel
let minimumBet = '100000000000000'

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  factory = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({
      data: compiledFactory.evm.bytecode.object,
    })
    .send({ from: accounts[0], gas: '1000000' })

  await factory.methods
    .createCoinflipDuel(Number(minimumBet), 'Test')
    .send({ from: accounts[0], gas: defaultGas })

  const ret = await factory.methods.getDeployedCoinflipDuels().call()
  coinflipDuelAddress = ret[0]
  coinflipDuel = await new web3.eth.Contract(
    compiledCoinflipDuel.abi,
    coinflipDuelAddress
  )
})

describe('Factory', () => {
  it('Factory deployed and factory deploys coinflip-duel contract', () => {
    assert.ok(factory.options.address)
    assert.ok(coinflipDuel.options.address)
  })
})

describe('CoinflipDuel', () => {
  it('Player 1 can enter the contract', async () => {
    try {
      await coinflipDuel.methods
        .enterContract()
        .send({ value: minimumBet, from: accounts[0], gas: defaultGas })
      assert(true)
    } catch (err) {
      assert(false)
    }
  })

  it('Player cannot enter with a betsize that is under the treshold', async () => {
    try {
      await coinflipDuel.methods
        .enterContract()
        .send({ value: '9', from: accounts[0], gas: defaultGas })
      assert(false)
    } catch (err) {
      assert(true)
    }
  })

  it('Coinflip works as expected', async () => {
    try {
      const player1BalanceBefore = await web3.eth.getBalance(accounts[0])
      const player2BalanceBefore = await web3.eth.getBalance(accounts[1])

      await coinflipDuel.methods
        .enterContract()
        .send({ value: minimumBet, from: accounts[0], gas: defaultGas })

      await coinflipDuel.methods
        .enterContract()
        .send({ value: minimumBet, from: accounts[1], gas: defaultGas })

      const contractBalance = await coinflipDuel.methods.getBalance().call()

      const player1BalanceAfter = await web3.eth.getBalance(accounts[0])
      const player2BalanceAfter = await web3.eth.getBalance(accounts[1])

      if (Number(contractBalance) === 0) {
        assert(
          player1BalanceAfter > player1BalanceBefore ||
            player2BalanceAfter > player2BalanceBefore
        )
      } else {
        assert(false)
      }
    } catch (err) {
      assert(false)
    }
  })

  it('Player 1 is able to withdraw', async () => {
    await coinflipDuel.methods
      .enterContract()
      .send({ value: minimumBet, from: accounts[0], gas: defaultGas })

    const player1BalanceBefore = await web3.eth.getBalance(accounts[0])

    await coinflipDuel.methods
      .withdraw()
      .send({ from: accounts[0], gas: defaultGas })

    const balance = await coinflipDuel.methods.getBalance().call()

    const player1BalanceAfter = await web3.eth.getBalance(accounts[0])

    assert(player1BalanceAfter > player1BalanceBefore && Number(balance) === 0)
  })

  it('Multiple player enters contract during the same block (on Rinkeby testnet) and coinflip doesnt fail', async () => {
    try {
      const rinkebyAccounts = await rinkeby.eth.getAccounts()

      const rinkebyCoinflipDuel = await new rinkeby.eth.Contract(
        compiledCoinflipDuel.abi,
        '0x5292cB5e3eA1cd7D5ab9C8Aa20A385d7f8c005A9'
      )

      const blockBefore = await rinkeby.eth.getBlockNumber()

      rinkebyCoinflipDuel.methods
        .enterContract()
        .send({ value: '10', from: rinkebyAccounts[0], gas: defaultGas })

      rinkebyCoinflipDuel.methods
        .enterContract()
        .send({ value: '10', from: rinkebyAccounts[1], gas: defaultGas })

      rinkebyCoinflipDuel.methods
        .enterContract()
        .send({ value: '10', from: rinkebyAccounts[2], gas: defaultGas })

      const blockAfter = await rinkeby.eth.getBlockNumber()

      const balanceAfter = await rinkebyCoinflipDuel.methods.getBalance().call()

      if (blockBefore == blockAfter) {
        assert(balanceAfter <= 10)
      } else {
        console.log(
          'Smart contract calls didnt fit on the same block, try running the test again'
        )
        assert(false)
      }
    } catch (err) {
      console.log(err)
      assert(false)
    }
  })
})
