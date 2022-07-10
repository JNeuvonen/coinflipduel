import React, { useEffect, useState, useRef } from 'react'
import {
  fetchEthPrice,
  formatBetsize,
  getContractData,
} from '../../utils/functions/ethereumUtils'
import { useInterval } from '../../utils/hooks'
import * as CONSTANTS from '../../utils/constants/index'
import { ArrowRight, EthereumIcon } from '../../utils/icons'

const InfoPanel = (props) => {
  const [ethPrice, setEthPrice] = useState(null)
  const [lastEthPrice, setLastEthPrice] = useState(null)

  useEffect(() => {
    const asyncHelper = async () => {
      const fetchedEthPrice = await fetchEthPrice()
      setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2))
      setLastEthPrice(Number(fetchedEthPrice.data.price).toFixed(2))
    }

    asyncHelper()
  }, [])

  const fetchPrice = async () => {
    setLastEthPrice(ethPrice)
    const fetchedEthPrice = await fetchEthPrice()
    setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2))
  }

  useInterval(fetchPrice, 1000)

  return (
    <div
      style={{
        fontSize: 17,
        rowGap: '10px',
        columnGap: '20px',
        padding: '10px',
        borderRadius: '10px',
      }}
      className="flex-box fontWeight500 flex-wrap align-items-center default-shadow"
    >
      <div className="flex-box align-items-center">
        <EthereumIcon width={20} height={20} />
        <span style={{ marginLeft: 5 }}>
          {' '}
          ETH price:{' '}
          <span
            style={{
              color: ethPrice > lastEthPrice ? CONSTANTS.GREEN : CONSTANTS.RED,
            }}
          >
            ${ethPrice}
          </span>
        </span>
      </div>
      <div className="">Rounds Played: {props.contractData.coinFlips}</div>
      <div>
        Money Wagered: {formatBetsize(props.contractData.moneyExchanged)}
      </div>
    </div>
  )
}
export default InfoPanel
