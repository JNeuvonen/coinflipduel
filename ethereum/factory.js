import Factory from './build/CoinflipDuelFactory.json'
import web3 from './web3'

const instance = new web3.eth.Contract(
  Factory.abi,
  '0x7C1aeffE91eeFFe8b4d73921376d672019c68353'
)
export default instance
