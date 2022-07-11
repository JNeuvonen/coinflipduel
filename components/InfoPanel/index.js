import React, { useEffect, useState, useRef, useMemo } from 'react'
import {
  fetchEthPrice,
  formatBetsize,
  getContractData,
} from '../../utils/functions/ethereumUtils'
import { useInterval } from '../../utils/hooks'
import * as CONSTANTS from '../../utils/constants/index'
import { ArrowRight, EthereumIcon } from '../../utils/icons'
import { getDuelInfo } from '../../utils/functions/general'

const InfoPanel = (props) => {
  const [ethPrice, setEthPrice] = useState(null)
  const [lastEthPrice, setLastEthPrice] = useState(null)
  const [roundCount, setRoundCount] = useState(0)
  const [totalEthWagered, setTotalEthWagered] = useState(0)

  useEffect(() => {
    const asyncHelper = async () => {
      const fetchedEthPrice = await fetchEthPrice()
      setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2))
      setLastEthPrice(Number(fetchedEthPrice.data.price).toFixed(2))
    }
  }, [])

  useMemo(() => {
    setTotalEthWagered(getDuelInfo(props.contractData))
    setRoundCount(props.contractData.length)
  }, [props.contractData])

  const fetchPrice = async () => {
    setLastEthPrice(ethPrice)
    const fetchedEthPrice = await fetchEthPrice()
    setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2))
  }

  useInterval(fetchPrice, 1000)

  return (
    <div
      style={{
        fontSize: 15,
        rowGap: '10px',
        columnGap: '20px',
      }}
      className="flex-box fontWeight500 flex-wrap align-items-center"
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
      <div className="">Rounds Played: {roundCount}</div>
      <div>Money Wagered: {formatBetsize(totalEthWagered, 2)}</div>
    </div>
  )
}
export default InfoPanel
