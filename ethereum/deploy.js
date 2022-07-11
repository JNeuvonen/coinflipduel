const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const compiledFactory = require('./build/CoinflipDuelFactory.json')

const provider = new HDWalletProvider(
  process.env.MNENOMIC,
  // remember to change this to your own phrase!
  'https://rinkeby.infura.io/v3/dfbc43ef38b54878b7865bca83ebc173'
  // remember to change this to your own endpoint!
)
const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log('Attempting to deploy from account', accounts[0])

  console.log(compiledFactory.abi)

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: '10000000', from: accounts[0] })

  console.log('Contract deployed to', result.options.address)
  provider.engine.stop()
}
deploy()
