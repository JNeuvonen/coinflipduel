import axios from 'axios'

export const formatAddress = (address) => {
  return (
    address[0] +
    address[1] +
    address[2] +
    address[3] +
    address[4] +
    '...' +
    address[address.length - 4] +
    address[address.length - 3] +
    address[address.length - 2] +
    address[address.length - 1]
  )
}

export const formatBetsize = (wei, decimals) => {
  if (wei < Math.pow(10, 7)) {
    return wei + ' Wei'
  }

  if (wei < Math.pow(10, 16)) {
    return String(wei / Math.pow(10, 9)) + ' Gwei'
  }

  if (decimals) {
    return String((wei / Math.pow(10, 18)).toFixed(decimals)) + ' Eth'
  }

  return String(wei / Math.pow(10, 18)) + ' Eth'
}

export const fetchEthPrice = async () => {
  return await axios.get(
    'https://api3.binance.com/api/v3/ticker/price?symbol=ETHUSDT'
  )
}

export const getContractData = (contracts) => {
  let coinFlips = 0
  let moneyExchanged = 0
  let winners = {}
  let losers = {}

  contracts.map((item) => {
    coinFlips += item.history[0].length
    item.history[0].map((item) => {
      moneyExchanged += Number(item[2])
      if (item[0] in winners) {
        winners[item[0]]['rounds'] += 1
        winners[item[0]]['money'] += Number(item[2])
      } else {
        winners[item[0]] = {}
        winners[item[0]]['rounds'] = 1
        winners[item[0]]['money'] += Number(item[2])
      }

      if (item[1] in losers) {
        losers[item[1]]['rounds'] += 1
        losers[item[1]]['money'] += Number(item[2])
      } else {
        losers[item[1]] = {}

        losers[item[1]]['rounds'] = 1
        losers[item[1]]['money'] += Number(item[2])
      }
    })
  })

  return { coinFlips, moneyExchanged, winners, losers }
}
