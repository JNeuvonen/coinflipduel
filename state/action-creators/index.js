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
