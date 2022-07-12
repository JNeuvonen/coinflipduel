export const RED = '#eb1717'
export const GREEN = '#32a11b'
export const ERROR_MESSAGE = '#e66074'
export const CTA = '#d6154c'
export const NETWORK = 'rinkeby'
export const TEXT = '#4486e8'

export const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com/'],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: [
      'https://bsc-dataseed1.binance.org',
      'https://bsc-dataseed2.binance.org',
      'https://bsc-dataseed3.binance.org',
      'https://bsc-dataseed4.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'wss://bsc-ws-node.nariox.org',
    ],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  rinkeby: {
    chainName: 'Ethereum Testnet Rinkeby',
    chainId: `0x${Number(4).toString(16)}`,
    nativeCurrency: {
      name: 'Rinkeby Ether',
      symbol: 'RIN',
      decimals: 18,
    },

    rpcUrls: [
      'https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c',
      'wss://rinkeby.infura.io/ws/v3/15c1d32581894b88a92d8d9e519e476c',
    ],
    blockExplorerUrls: [
      {
        name: 'etherscan-rinkeby',
        url: 'https://rinkeby.etherscan.io',
        standard: 'EIP3091',
      },
    ],
  },
}
