import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import web3 from '../../ethereum/web3'
import Updaters from '../../state/utils'
import { disableBlur } from '../../utils/functions/css'
import {
  formatAddress,
  formatBetsize,
} from '../../utils/functions/ethereumUtils'
import { copyToClipBoard } from '../../utils/functions/general'
import { CancelIcon, CopyIcon, EthereumIcon, LinkIcon } from '../../utils/icons'
import ViewOnEtherScan from '../ViewOnEtherscan'
const Account = (props) => {
  const account = useSelector((state) => state.account)
  const [balance, setBalance] = useState(null)
  const { updateInfoMessage, updateInfoMessageTimeout, updateInfoMessageType } =
    Updaters()
  useEffect(() => {
    const asyncHelper = async () => {
      const balance = await web3.eth.getBalance(account[0])
      setBalance(Number(balance))
    }
    asyncHelper()
  }, [])
  const clipboardOnClick = () => {
    copyToClipBoard(account[0])
    updateInfoMessageTimeout(2500)
    updateInfoMessage('Copied to clipboard')
    updateInfoMessageType('success')
  }
  return (
    <div className="account">
      <div
        className="top-right-corner cursor-pointer"
        onClick={() => {
          disableBlur()
          props.setMetamaskClick(false)
        }}
      >
        <CancelIcon width={20} height={20} />
      </div>
      <h2>Account</h2>
      <div
        className="account__info-tab flex-box flex-wrap"
        style={{ rowGap: '15px' }}
      >
        <div
          className="flex-box flex-wrap align-items-center space-between"
          style={{ columnGap: '10px', flexBasis: '100%', rowGap: '10px' }}
        >
          <h3>Connected with Metamask</h3>
        </div>

        <ViewOnEtherScan account={account[0]} />
        <div className="">
          <div
            className="flex-box flex-wrap align-items-center"
            style={{ columnGap: '5px', flexBasis: '100%', rowGap: '10px' }}
          >
            <EthereumIcon width={20} height={20} />
            <h3>Balance: {formatBetsize(balance, 2)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Account
