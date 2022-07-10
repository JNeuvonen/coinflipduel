import React from 'react'
import { ReturnSuccessMessageHtml } from '../../utils/functions/html'
const InfoMessage = (props) => {
  if (props.type === 'success') {
    return (
      <div className="success">
        <ReturnSuccessMessageHtml content={props.text} />
      </div>
    )
  }

  return <div className={props.type}>{props.children}</div>
}
export default InfoMessage
