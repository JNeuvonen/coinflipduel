import React, { useState } from 'react'
import { CancelIcon, WarningIcon } from '../../utils/icons'
const ErrorMessage = ({ errorMessage, cancelCallback }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="flex-box align-items-center error-message content-center flex-wrap"
      style={{ columnGap: 15 }}
    >
      <WarningIcon width={30} height={30} />
      <h2> {errorMessage}</h2>
      <div
        className="top-right-corner cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={cancelCallback}
      >
        <CancelIcon width={22} height={22} fill={hover ? 'white' : 'black'} />
      </div>
    </div>
  )
}
export default ErrorMessage
