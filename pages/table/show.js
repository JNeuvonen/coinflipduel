import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import fireJSON from '../../assets/JSON/icons8-fire (2).json'
import waitingJSON from '../../assets/JSON/icons8-iphone-spinner.json'
import LoadingSpinner from '../../components/LoadingSpinner'
import NoMetamask from '../../components/NoMetamask'
import PermaLoopAnimation from '../../components/PermaLoopAnimation'
import ViewOnEtherScan from '../../components/ViewOnEtherscan'

import coinflipduel from '../../ethereum/coinflipduel'
import Updaters from '../../state/utils'
import * as C from '../../utils/constants'
import {
  formatAddress,
  formatBetsize,
} from '../../utils/functions/ethereumUtils'
import {
  findTableByAddress,
  getContractBalance,
  getMinstakeFromContract,
  getNumberOfPlayers,
  getPlayer1FromContract,
  getTableNameFromContract,
} from '../../utils/functions/general'
import { LinkIcon } from '../../utils/icons'

const TableShow = (props) => {
  const [table, setTable] = useState(null)
  const [contract, setContract] = useState(null)
  const account = useSelector((state) => state.account)
  const [metamask, setMetamask] = useState(false)
  const { updateInfoMessage, updateInfoMessageTimeout, updateInfoMessageType } =
    Updaters()

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      setMetamask(true)
    }
  }, [])

  useEffect(() => {
    const tableHelper = findTableByAddress(
      props.coinFlipDuelContracts,
      props.address
    )
    if (tableHelper !== null) {
      setContract(coinflipduel(props.address))
    }
    setTable(tableHelper)
  }, [props])

  const onClickHandler = async () => {
    if (contract) {
      try {
        const staked = await contract.methods.player1Bet().call()

        const tx = await contract.methods.enterContract().send({
          from: account[0],
          value: Number(getMinstakeFromContract(table)),
        })

        updateInfoMessageTimeout(10000)
        updateInfoMessageType('success')
        updateInfoMessage(
          <div>
            {staked !== 0 ? (
              <div>Coinflip finished!</div>
            ) : (
              <div>Entered a contract!</div>
            )}
            <div className="">
              <a
                className="flex-box flex-wrap align-items-center cursor-pointer link-cancel-default"
                href={`https://rinkeby.etherscan.io/tx/${tx.transactionHash}`}
                target="_blank"
              >
                <LinkIcon width={20} height={20} />
                <p
                  style={{
                    fontWeight: 300,
                    marginLeft: 5,
                    fontSize: 17,
                    textDecoration: 'underline',
                  }}
                  className="cursor-pointer"
                >
                  View on etherscan
                </p>
              </a>
            </div>
          </div>
        )
      } catch (err) {
        updateInfoMessage(err.message)
        updateInfoMessageTimeout(10000)
        updateInfoMessageType('failure')
      }
    }
  }

  if (!metamask) {
    return <NoMetamask />
  }

  if (!table) {
    if (props.coinFlipDuelContracts.length > 0) {
      return (
        <div className="table">
          <div className="table__form">
            <h1 style={{ textAlign: 'center', color: C.ERROR_MESSAGE }}>
              Table with address {props.address} does not exist.
            </h1>
          </div>
        </div>
      )
    }
    return <LoadingSpinner />
  }

  return (
    <div className="table">
      <div
        className="table__form flex-box flex-wrap"
        style={{ columnGap: '10px' }}
      >
        <div
          className="flex-box space-between flex-wrap"
          style={{ flexBasis: '100%' }}
        >
          <div className="">
            <h1>
              {getTableNameFromContract(table)}
              {' ' + formatBetsize(getMinstakeFromContract(table))}
            </h1>
          </div>
          <div className="">
            {
              <div
                className="flex-box align-items-center link-cta-button"
                style={{ columnGap: '5px' }}
                onClick={onClickHandler}
              >
                <PermaLoopAnimation
                  animJSON={fireJSON}
                  width={35}
                  height={35}
                  speed={1}
                />
                <h3 style={{ color: C.CTA, fontSize: 22 }}>Ready for action</h3>
              </div>
            }
          </div>
        </div>
        <div
          className="flex-box space-between flex-wrap align-items-center"
          style={{ flexBasis: '100%' }}
        >
          <h3 style={{ fontSize: 20 }}>
            Players: {getNumberOfPlayers(table)}/2
          </h3>
          <div className="">
            {getNumberOfPlayers(table) === 1 ? (
              <div style={{ padding: '10px', fontSize: 16, fontWeight: '700' }}>
                <ViewOnEtherScan
                  account={getPlayer1FromContract(table)}
                  onlyAddress={true}
                />
                <ViewOnEtherScan
                  account={getPlayer1FromContract(table)}
                  onlyViewOnEtherScan={true}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <h3 style={{ marginTop: 15, fontSize: 20 }}>Recent Coinflips</h3>
      </div>
    </div>
  )
}

TableShow.getInitialProps = async (props) => {
  const tableAddress = props.query.address

  return {
    address: tableAddress,
  }
}
export default TableShow
