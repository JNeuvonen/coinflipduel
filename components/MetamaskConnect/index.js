import React, { useEffect, useState, useMemo } from 'react'
import { MetamaskIcon, WarningIcon } from '../../utils/icons'
import web3 from '../../ethereum/web3'
import { formatAddress } from '../../utils/functions/ethereumUtils'
import { useSelect } from '@mui/base'
import { useSelector } from 'react-redux'
import Updaters from '../../state/utils'
import { enableBlur } from '../../utils/functions/css'
const MetamaskConnect = (props) => {
  const [metamask, setMetamask] = useState(false)
  const accounts = useSelector((state) => state.account)
  const { updateAccount, updateErrorMessage } = Updaters()

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      setMetamask(true)
    }
  }, [])

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

  if (metamask) {
    return (
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
