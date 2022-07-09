import React, { useEffect } from 'react'
import { ReturnSuccessMessageHtml } from '../../utils/functions/html'
const InfoMessage = (props) => {
  useEffect(() => {}, [])
  if (props.type === 'success') {
    return (
      <div className={props.type}>
        <ReturnSuccessMessageHtml content={'Copied to clipboard'} />
      </div>
    )
  }
  return <div className={props.type}>{props.children}</div>
}
export default InfoMessage
