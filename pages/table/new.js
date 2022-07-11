import { Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import factory from '../../ethereum/factory'
import { updateInfoMessageType } from '../../state/action-creators'
import Updaters from '../../state/utils'
import {
  containsNumber,
  tableNameAlreadyExists,
  upperCase,
} from '../../utils/functions/general'
import { InfoIcon, LinkIcon } from '../../utils/icons'
const Table = (props) => {
  const [tableName, setTableName] = useState('')
  const [tableNameError, setTableNameError] = useState('')
  const [minimumStake, setMinimumStake] = useState('')
  const [minimumStakeError, setMinimumStakeError] = useState('')
  const [dropDownValue, setDropDownValue] = useState('ETH')
  const [metamask, setMetamask] = useState(false)
  const { updateInfoMessage, updateInfoMessageTimeout } = Updaters()
  const account = useSelector((state) => state.account)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      setMetamask(true)
    }
  }, [])

  useEffect(() => {
    const nameAlreadyExistsError = tableNameAlreadyExists(
      props.coinFlipDuelContracts,
      tableName
    )

    let lengthError = tableName.length < 5
    let numberError = containsNumber(tableName)
    let errorName = false
    let errorStake = false
    let upperCaseError = upperCase(tableName)

    if (tableName) {
      if (
        nameAlreadyExistsError ||
        lengthError ||
        numberError ||
        upperCaseError
      ) {
        errorName = true
        if (nameAlreadyExistsError) {
          setTableNameError('Table name already exists on the blockchain.')
        }

        if (lengthError) {
          setTableNameError('Table name should be atleast 5 characters long.')
        }

        if (numberError) {
          setTableNameError('Table name should not contain numbers.')
        }

        if (upperCaseError) {
          setTableNameError(
            'Table name should start with a uppercase character.'
          )
        }
      } else {
        setTableNameError('')
      }
    }

    if (minimumStake < 0) {
      errorStake = true
      setMinimumStakeError('Minimum stake must be non-negative.')
    } else {
      setMinimumStakeError('')
    }

    if (!errorName && !errorStake && tableName && minimumStake) {
      try {
        const tableCta = document.getElementById('table__cta')
        tableCta.style.filter = 'opacity(1)'
      } catch {}
    } else {
      try {
        const tableCta = document.getElementById('table__cta')
        tableCta.style.filter = 'opacity(0.3)'
      } catch {}
    }
  }, [tableName, minimumStake])

  const onClickHandler = async () => {
    let minBet = String(minimumStake)
    if (dropDownValue === 'ETH') {
      minBet = String(minimumStake * Math.pow(10, 18))
    }

    if (dropDownValue === 'GWEI') {
      minBet = String(minimumStake * Math.pow(10, 9))
    }

    try {
      const deployedContract = await factory.methods
        .createCoinflipDuel(minBet, tableName)
        .send({ from: account[0] })
      updateInfoMessageTimeout(10000)
      updateInfoMessageType('success')
      updateInfoMessage(
        <div>
          Succesfully deployed a contract.
          <div className="">
            <a
              className="flex-box flex-wrap align-items-center cursor-pointer link-cancel-default"
              href={`https://rinkeby.etherscan.io/tx/${deployedContract.transactionHash}`}
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

  if (!metamask) {
    return (
      <div className="table">
        <div className="table__form">
          <h1 style={{ textAlign: 'center' }}>
            User needs to have{' '}
            <a
              href="https://metamask.io/"
              className="link-cancel-default"
              style={{ textDecoration: 'underline' }}
            >
              Metamask
            </a>{' '}
            installed to create a new table
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="table">
      <div className="table__form">
        <div
          className="flex-box align-items-center content-center"
          style={{ columnGap: '10px' }}
        >
          <h1>Create a new table</h1>
          <Tooltip
            title={
              <div style={{ fontSize: 20 }}>
                Deploy new coinflip-duel smart contract on to the rinkeby
                testnet
              </div>
            }
          >
            <div className="cursor-pointer" style={{ marginBottom: 10 }}>
              <InfoIcon width={25} height={25} fill={'#4486e8'} />
            </div>
          </Tooltip>
        </div>

        <div>
          <div
            className="flex-box align-items-center"
            style={{ columnGap: '5px' }}
          >
            <label>Table name</label>
          </div>
          <input
            style={{ width: '100%', paddingLeft: 10 }}
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
          ></input>
          {tableNameError && <p style={{ marginTop: 5 }}>{tableNameError}</p>}
        </div>
        <div style={{ marginTop: '20px' }}>
          <div
            className="flex-box align-items-center"
            style={{ columnGap: '5px' }}
          >
            <label>Minimum stake</label>
            <Tooltip
              title={
                <div style={{ fontSize: 20 }}>
                  <p>ETH = 10 ^ 18 WEI</p>
                  <p>GWEI = 10 ^ 9 WEI</p>
                  <p>WEI = Smallest unit</p>
                </div>
              }
            >
              <div style={{ marginTop: 4 }}>
                <InfoIcon width={22} height={22} fill={'#4486e8'} />
              </div>
            </Tooltip>
          </div>
          <div className="eth-input flex-box align-items-center">
            <select
              style={{ outline: 'none', width: '150px', textAlign: 'center' }}
              className="cursor-pointer"
              onChange={(e) => {
                setDropDownValue(e.target.value)
              }}
            >
              <option value="ETH">ETH</option>
              <option value="GWEI">GWEI</option>
              <option value="WEi">WEI</option>
            </select>

            <input
              style={{ width: '100%', paddingLeft: '10px' }}
              type="number"
              value={minimumStake}
              onChange={(e) => setMinimumStake(e.target.value)}
            ></input>
          </div>
          {minimumStakeError && (
            <p style={{ marginTop: 5 }}>{minimumStakeError}</p>
          )}
        </div>

        <button
          className="table__cta centered-horizontal"
          id="table__cta"
          style={{ marginTop: 40 }}
          disabled={
            tableNameError || minimumStakeError || !minimumStake || !tableName
              ? true
              : false
          }
          onClick={onClickHandler}
        >
          <div>
            <span> Deploy</span>
          </div>
        </button>
      </div>
    </div>
  )
}
export default Table
