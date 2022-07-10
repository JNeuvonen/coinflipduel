const reducer = (state, action) => {
  switch (action.type) {
    case 'updateAccount':
      return { ...state, account: action.payload }

    case 'updateErrorMessage':
      return { ...state, errorMessage: action.payload }

    case 'updateInfoMessage':
      return { ...state, infoMessage: action.payload }

    case 'updateInfoMessageType':
      return { ...state, infoMessageType: action.payload }

    case 'updateInfoMessageTimeout':
      return { ...state, infoMessageTimeout: action.payload }

    default: {
      return {
        account: null,
        errorMessage: null,
        infoMessage: null,
        infoMessageType: null,
        infoMessageTimeout: null,
      }
    }
  }
}

export default reducer
