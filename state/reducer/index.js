const reducer = (state, action) => {
  switch (action.type) {
    case 'updateAccount':
      return { ...state, account: action.payload }

    case 'updateErrorMessage':
      return { ...state, errorMessage: action.payload }

    case 'updateInfoMessage':
      return { ...state, infoMessage: action.payload }

    default: {
      return {
        account: null,
        errorMessage: null,
        infoMessage: null,
      }
    }
  }
}

export default reducer
