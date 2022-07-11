import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as actionCreators from '../../state/action-creators/index'

const Updaters = () => {
  const dispatch = useDispatch()
  const {
    updateAccount,
    updateErrorMessage,
    updateInfoMessage,
    updateInfoMessageType,
    updateInfoMessageTimeout,
    updateLoadingSpinner,
  } = bindActionCreators(actionCreators, dispatch)
  return {
    updateAccount,
    updateErrorMessage,
    updateInfoMessage,
    updateInfoMessageType,
    updateInfoMessageTimeout,
    updateLoadingSpinner,
  }
}

export default Updaters
