import React from 'react'
import Updaters from '../../state/utils'
import { formatAddress } from '../../utils/functions/ethereumUtils'
import { copyToClipBoard } from '../../utils/functions/general'
import { CopyIcon, LinkIcon } from '../../utils/icons'
const ViewOnEtherScan = ({
  account,
  onlyAddress,
  onlyViewOnEtherScan,
  color,
}) => {
  const { updateInfoMessage, updateInfoMessageTimeout, updateInfoMessageType } =
    Updaters()

  const clipboardOnClick = () => {
    copyToClipBoard(account)
    updateInfoMessageTimeout(2500)
    updateInfoMessage('Copied to clipboard')
    updateInfoMessageType('success')
  }

  if (onlyAddress) {
    return (
      <div onClick={clipboardOnClick} className="" style={{ color: color }}>
        <CopyIcon width={20} height={20} />
        <span style={{ marginLeft: 5 }}>{formatAddress(account)}</span>
      </div>
    )
  }

  if (onlyViewOnEtherScan) {
    return (
      <a
        className="flex-box flex-wrap align-items-center cursor-pointer link-cancel-default"
        href={`https://rinkeby.etherscan.io/address/${account}`}
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
    )
  }

  return (
    <>
      <div
        className="flex-box flex-wrap align-items-center width100 space-between"
        style={{ columnGap: '10px', flexBasis: '100%' }}
      >
        <div onClick={clipboardOnClick} className="">
          <CopyIcon width={20} height={20} />
          <span style={{ marginLeft: 5 }}>{formatAddress(account)}</span>
        </div>

        <a
          className="flex-box flex-wrap align-items-center cursor-pointer link-cancel-default"
          href={`https://rinkeby.etherscan.io/address/${account}`}
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
    </>
  )
}
export default ViewOnEtherScan
