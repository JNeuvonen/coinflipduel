import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import web3 from '../../ethereum/web3'
import { updateInfoMessageType } from '../../state/action-creators'
import Updaters from '../../state/utils'
import { disableBlur } from '../../utils/functions/css'
import {
  formatAddress,
  formatBetsize,
} from '../../utils/functions/ethereumUtils'
import { copyToClipBoard } from '../../utils/functions/general'
import {
  CancelIcon,
  CopyIcon,
  EthereumIcon,
  KeyIcon,
  LinkIcon,
} from '../../utils/icons'
const Account = (props) => {
  const account = useSelector((state) => state.account)
  const [balance, setBalance] = useState(null)
  const { updateInfoMessage, updateInfoMessageTimeout } = Updaters()
  useEffect(() => {
    const asyncHelper = async () => {
      const balance = await web3.eth.getBalance(account[0])
      setBalance(Number(balance))
    }
    asyncHelper()
  }, [])
  const clipboardOnClick = () => {
    copyToClipBoard(account[0])
    updateInfoMessage('Copied to clipboard')
    updateInfoMessageTimeout(5000)
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
        <div
          className="flex-box flex-wrap align-items-center width100 space-between"
          style={{ columnGap: '10px', flexBasis: '100%' }}
        >
          <div onClick={clipboardOnClick} className="">
            <CopyIcon width={20} height={20} />
            <span style={{ marginLeft: 5 }}>{formatAddress(account[0])}</span>
          </div>

          <a
            className="flex-box flex-wrap align-items-center cursor-pointer link-cancel-default"
            href={`https://rinkeby.etherscan.io/address/${account[0]}`}
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
