import CoinflipDuel from './build/CoinflipDuel.json'
import web3 from './web3'

export default (address) => {
  return new web3.eth.Contract(CoinflipDuel.abi, address)
}
