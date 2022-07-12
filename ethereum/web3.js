import Web3 from 'web3'
import { networks } from '../utils/constants'

let web3

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum)
  const asyncHelper = async () => {
    const network = await web3.eth.net.getNetworkType()
    if (network !== 'rinkeby') {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: Web3.utils.toHex(4) }],
        })
      } catch (err) {}
    }
  }
  asyncHelper()
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c'
  )
  web3 = new Web3(provider)
}

export default web3
