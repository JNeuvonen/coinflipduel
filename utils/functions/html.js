import Updaters from '../../state/utils'
import { CancelIcon, SuccessIcon } from '../icons'

export const ReturnSuccessMessageHtml = ({ content, type }) => {
  const { updateInfoMessage } = Updaters()
  const onClick = () => {
    updateInfoMessage(null)
  }
  return (
    <div className="flex-box align-items-center" style={{ columnGap: '10px' }}>
      {type === 'success' ? <SuccessIcon width={25} height={25} /> : null}
      <h2>{content}</h2>
      <div className="top-right-corner cursor-pointer" onClick={onClick}>
        <CancelIcon width={15} height={15} />
      </div>
    </div>
  )
}
