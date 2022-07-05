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
let minimumBet = '1000000000'

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  factory = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({
      data: compiledFactory.evm.bytecode.object,
    })
    .send({ from: accounts[0], gas: '1000000' })

  await factory.methods
    .createCoinflipDuel(Number(minimumBet))
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
      console.log(player1BalanceBefore, player2BalanceBefore)
    } catch (err) {
      assert(true)
    }
  })

  it('Multiple player enters contract during the same block (on Rinkeby testnet) and coinflip doesnt fail', async () => {
    try {
      const rinkebyAccounts = await rinkeby.eth.getAccounts()

      const rinkebyCoinflipDuel = await new rinkeby.eth.Contract(
        compiledCoinflipDuel.abi,
        '0xc51d47E2F5a3874E5EaD2d44527CdE5DDB6dDc6E'
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
