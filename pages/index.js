import useMediaQuery from '@mui/material/useMediaQuery'
import React, { useEffect, useState } from 'react'
import InfoPanel from '../components/InfoPanel'
import {
  formatAddress,
  formatBetsize,
  getContractData,
} from '../utils/functions/ethereumUtils'
import { sortOpenTables } from '../utils/functions/general'

const Index = (props) => {
  const [contractData, setContractData] = useState(
    getContractData(props.coinFlipDuelContracts)
  )
  let openTableList = props.coinFlipDuelContracts
  let coinFlipsList = props.coinFlips

  const [openTableSortType, setOpenTableSortType] = useState('Staked')
  const [openTableSortRev, setOpenTableSortRev] = useState(false)
  const [coinFlipsSortType, setCoinFlipsSortType] = useState('Block Timestamp')
  const [coinFlipsSortRev, setCoinFlipsSortRev] = useState(false)
  const bp1000 = useMediaQuery('(max-width:1000px)')
  const bp500 = useMediaQuery('(max-width:500px)')
  let openTableHeaders = bp1000
    ? ['Table', 'Staked', 'Min stake', 'Address']
    : ['#', 'Table', 'Staked', 'Min stake', 'Address']

  if (bp500) {
    openTableHeaders = ['Staked', 'Min stake', 'Address']
  }

  let coinFlipsHeaders = bp1000
    ? ['Block Timestamp', 'Winner', 'Loser', 'Waged']
    : ['#', 'Block Timestamp', 'Winner', 'Loser', 'Waged']

  if (bp500) {
    coinFlipsHeaders = ['Winner', 'Loser', 'Waged']
  }

  useEffect(() => {
    const asyncHelper = async () => {}
    asyncHelper()
  }, [])

  const renderOpenTables = () => {
    const render = openTableList.map((contract, i) => {
      const player1 =
        contract.history[3] === '0x0000000000000000000000000000000000000000'
          ? false
          : true
      return (
        <tr key={i} className={player1 ? 'tr-activated' : null}>
          {!bp1000 && (
            <td align="center" className="fontWeight500">
              {i + 1}
            </td>
          )}
          {!bp500 && (
            <td
              align="center"
              className="fontWeight500"
              style={{ fontWeight: 700, textDecoration: 'underline' }}
            >
              {contract.history[1]}
            </td>
          )}
          <td align="center" className="fontWeight500">
            {player1 ? formatBetsize(contract.history[5]) : '0'}
          </td>
          <td align="center" className="fontWeight500">
            {formatBetsize(contract.history[2], false)}
          </td>
          <td
            align="center"
            className="fontWeight500"
            style={{ fontWeight: 700, textDecoration: 'underline' }}
          >
            <a
              href={`https://rinkeby.etherscan.io/address/${contract.contract.options.address}`}
              target="_blank"
              className="link-cancel-default"
            >
              {formatAddress(contract.contract.options.address)}
            </a>
          </td>
        </tr>
      )
    })

    return render
  }

  const renderRecentCoinflips = () => {
    const render = coinFlipsList.map((item, i) => {
      return (
        <tr key={i} className={'cursor-default'}>
          {!bp1000 && (
            <td align="center" className="fontWeight500">
              {i + 1}
            </td>
          )}
          {!bp500 && (
            <td align="center" className="fontWeight500">
              {item[3]}
            </td>
          )}
          <td
            align="center"
            className="fontWeight500"
            style={{ fontWeight: 700, textDecoration: 'underline' }}
          >
            <a
              href={`https://rinkeby.etherscan.io/address/${item[0]}`}
              target="_blank"
              className="link-cancel-default"
            >
              {formatAddress(item[0])}
            </a>
          </td>
          <td
            align="center"
            className="fontWeight500"
            style={{ fontWeight: 700, textDecoration: 'underline' }}
          >
            <a
              href={`https://rinkeby.etherscan.io/address/${item[1]}`}
              target="_blank"
              className="link-cancel-default"
            >
              {formatAddress(item[1])}
            </a>
          </td>

          <td align="center" className="fontWeight500">
            {formatBetsize(item[2])}
          </td>
        </tr>
      )
    })

    return render
  }

  openTableList = sortOpenTables(
    openTableList,
    openTableSortType,
    openTableSortRev
  )

  coinFlipsList = sortOpenTables(
    coinFlipsList,
    coinFlipsSortType,
    coinFlipsSortRev
  )

  return (
    <div className="index-page">
      <InfoPanel contractData={contractData} />
      <h1 style={{ marginTop: 15 }}>Open Tables</h1>
      <div className="table-wrapper">
        <table className="contract-table" cellSpacing={0}>
          <thead>
            <tr>
              {openTableHeaders.map((item, i) => {
                return (
                  <th
                    className="fontWeight600"
                    key={i}
                    onClick={() => {
                      if (openTableSortType === item) {
                        setOpenTableSortRev(!openTableSortRev)
                      } else {
                        setOpenTableSortType(item)
                        setOpenTableSortRev(false)
                      }
                    }}
                  >
                    {item}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>{renderOpenTables()}</tbody>
        </table>
      </div>
      <h1 style={{ marginTop: 15 }}>Recent Coinflips</h1>
      <div className="table-wrapper">
        <table className="contract-table" cellSpacing={0}>
          <thead>
            <tr>
              {coinFlipsHeaders.map((item, i) => {
                return (
                  <th
                    className="fontWeight600"
                    key={i}
                    onClick={() => {
                      if (coinFlipsSortType === item) {
                        setCoinFlipsSortRev(!coinFlipsSortRev)
                      } else {
                        setCoinFlipsSortType(item)
                        setCoinFlipsSortRev(false)
                      }
                    }}
                  >
                    {item}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>{renderRecentCoinflips()}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Index
