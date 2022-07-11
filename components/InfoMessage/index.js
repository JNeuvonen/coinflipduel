import React, { useEffect } from 'react'
import { changeInfoMessageColor } from '../../utils/functions/css'
import { ReturnSuccessMessageHtml } from '../../utils/functions/html'
const InfoMessage = (props) => {
  useEffect(() => {
    changeInfoMessageColor(props.type)
  }, [props])

  return (
    <div className="success">
      <ReturnSuccessMessageHtml content={props.text} type={props.type} />
    </div>
  )
}
export default InfoMessage
