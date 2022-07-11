export const updateAccount = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'updateAccount',
      payload: data,
    })
  }
}

export const updateErrorMessage = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'updateErrorMessage',
      payload: data,
    })
  }
}

export const updateInfoMessage = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'updateInfoMessage',
      payload: data,
    })
  }
}

export const updateInfoMessageType = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'updateInfoMessageType',
      payload: data,
    })
  }
}

export const updateInfoMessageTimeout = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'updateInfoMessageTimeout',
      payload: data,
    })
  }
}

export const updateLoadingSpinner = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'updateLoadingSpinner',
      payload: data,
    })
  }
}
