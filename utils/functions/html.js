import { SuccessIcon } from '../icons'

export const ReturnSuccessMessageHtml = ({ content }) => {
  return (
    <div className="flex-box align-items-center" style={{ columnGap: '10px' }}>
      <SuccessIcon width={25} height={25} />
      <h2>{content}</h2>
    </div>
  )
}
