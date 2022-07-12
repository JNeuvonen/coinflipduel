import React, { useEffect, useState, useMemo } from 'react'
import { MetamaskIcon, WarningIcon } from '../../utils/icons'
import web3 from '../../ethereum/web3'
import { formatAddress } from '../../utils/functions/ethereumUtils'
import { useSelect } from '@mui/base'
import { useSelector } from 'react-redux'
import Updaters from '../../state/utils'
import { enableBlur } from '../../utils/functions/css'
import Web3 from 'web3'
const MetamaskConnect = (props) => {
  const [metamask, setMetamask] = useState(false)
  const accounts = useSelector((state) => state.account)
  const {
    updateAccount,
    updateErrorMessage,
    updateInfoMessage,
    updateInfoMessageType,
    updateInfoMessageTimeout,
  } = Updaters()

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      setMetamask(true)
    }
  }, [])

  const networkOnClick = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: Web3.utils.toHex(4) }],
      })
      props.setNetwork('rinkeby')
      setNetworkHelper('rinkeby')
    } catch (err) {
      if (err.message === 'User rejected the request.') {
        updateInfoMessageTimeout(60000)
        updateInfoMessage(
          'This website has limited functionality without the correct network'
        )
        updateInfoMessageType('failure')
      } else {
        updateInfoMessageTimeout(60000)
        updateInfoMessage(err.message)
        updateInfoMessageType('failure')
      }
    }
  }

  const metaMaskOnClick = async () => {
    if (accounts?.length > 0) {
      if (accounts[0]) {
        props.setMetamaskOnClick(true)
        enableBlur()
      }
    }
    try {
      const accounts_ = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      updateAccount(accounts_)
    } catch (err) {
      updateErrorMessage(
        'Already processing request to get accounts. Please try connecting wallet manually.'
      )
    }
  }

  console.log(props.network)
  if (metamask) {
    return (
      <>
        <div
          className="metamask-connect flex-box align-items-center"
          onClick={metaMaskOnClick}
        >
          <MetamaskIcon width={25} height={25} />

          {accounts?.length > 0 ? (
            <h3>{formatAddress(accounts[0])}</h3>
          ) : (
            <h3>Connect</h3>
          )}
        </div>

        {props.network !== 'rinkeby' && (
          <div
            className="flex-box align-items-center flex-wrap"
            style={{ marginBottom: 20, columnGap: '10px' }}
          >
            <WarningIcon width={28} height={28} />
            <h3 style={{ fontSize: 20 }}>
              Limited functionality without the correct{' '}
              <span className="link-styles" onClick={networkOnClick}>
                network
              </span>
            </h3>
          </div>
        )}
      </>
    )
  }

  return (
    <a href="https://metamask.io/">
      <div className="metamask-connect flex-box align-items-center">
        <WarningIcon width={25} height={25} />
        <h2>Metamask missing</h2>
      </div>
    </a>
  )
}
export default MetamaskConnect
