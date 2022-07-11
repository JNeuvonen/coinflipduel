import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import fireJSON from '../../assets/JSON/icons8-fire (2).json'
import PermaLoopAnimation from '../../components/PermaLoopAnimation'
import coinflipduel from '../../ethereum/coinflipduel'
import Updaters from '../../state/utils'
import * as C from '../../utils/constants'
import { formatBetsize } from '../../utils/functions/ethereumUtils'
import {
  findTableByAddress,
  getContractBalance,
  getMinstakeFromContract,
  getTableNameFromContract,
} from '../../utils/functions/general'
import web3 from '../../ethereum/web3'
import { LinkIcon } from '../../utils/icons'

const TableShow = (props) => {
  const [table, setTable] = useState(null)
  const [contract, setContract] = useState(null)
  const account = useSelector((state) => state.account)
  const { updateInfoMessage, updateInfoMessageTimeout, updateInfoMessageType } =
    Updaters()
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
        const tx = await contract.methods.enterContract().send({
          from: account[0],
          value: Number(getMinstakeFromContract(table)),
        })

        updateInfoMessageTimeout(10000)
        updateInfoMessageType('success')
        updateInfoMessage(
          <div>
            Coinflip Finished!
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
        console.log(err.message)

        updateInfoMessage(err.message)
        updateInfoMessageTimeout(10000)
        updateInfoMessageType('failure')
      }
    }
  }
  if (!table) {
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
  return (
    <div className="table">
      <div className="table__form">
        <div className="flex-box space-between flex-wrap">
          <div className="">
            <h1>
              {getTableNameFromContract(table)}
              {' ' + formatBetsize(getMinstakeFromContract(table))}
            </h1>
          </div>
          <div className="">
            {getContractBalance(table) === 0 ? null : (
              <div
                className="flex-box align-items-center link-cta-button"
                style={{ columnGap: '5px' }}
                onClick={onClickHandler}
              >
                <PermaLoopAnimation
                  animJSON={fireJSON}
                  width={30}
                  height={30}
                  speed={1}
                />
                <h3 style={{ color: C.CTA }}>Ready for action</h3>
              </div>
            )}
          </div>
        </div>
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
