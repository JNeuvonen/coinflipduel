import Head from 'next/head'
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { updateInfoMessageType } from '../../state/action-creators'
import Updaters from '../../state/utils'
import {
  disableBlur,
  disableInfoMessage,
  enableInfoMessage,
} from '../../utils/functions/css'
import Account from '../Account'
import ErrorMessage from '../ErrorMessage'
import InfoMessage from '../InfoMessage'
import LoadingSpinner from '../LoadingSpinner'
import MetamaskConnect from '../MetamaskConnect'
import Nav from '../Nav'
const Layout = (props) => {
  const [showError, setShowError] = useState(false)
  const [metamaskClick, setMetamaskClick] = useState(false)
  const infoMessageType = useSelector((state) => state.infoMessageType)
  const infoMessageTimeout = useSelector((state) => state.infoMessageTimeout)

  const errorMessage = useSelector((state) => state.errorMessage)
  const infoMessage = useSelector((state) => state.infoMessage)
  const [spinner, setSpinner] = useState(true)
  const { updateErrorMessage, updateInfoMessage } = Updaters()
  const errorCancel = () => {
    setShowError(false)
    updateErrorMessage(null)
  }

  const infoMessageCancel = () => {
    disableInfoMessage()
    updateInfoMessage(null)
    updateInfoMessageType(null)
  }

  useEffect(() => {
    document.getElementById('blur').addEventListener('click', (e) => {
      disableBlur()
      setMetamaskClick(false)
    })

    setTimeout(() => {
      setSpinner(false)
    }, [2000])
  }, [])

  useEffect(() => {
    if (errorMessage !== null) {
      setShowError(true)
      setTimeout(() => {
        errorCancel()
      }, [15000])
    }
  }, [errorMessage])

  useEffect(() => {
    if (infoMessage !== null) {
      enableInfoMessage()
      setTimeout(() => {
        infoMessageCancel()
      }, [infoMessageTimeout])
    } else {
      infoMessageCancel()
    }
  }, [infoMessage])

  return (
    <div className="background">
      <Head>
        <meta name="viewport" content="width=device-width, maximum-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Coinflip.app" />
        <title>Coinflip.app</title>
      </Head>

      {spinner && <LoadingSpinner />}

      <div className="layout">
        <div className="blur" id="blur"></div>
        <div className="blur" id="blur-2"></div>

        <Nav />
        {showError && (
          <ErrorMessage
            errorMessage={errorMessage}
            cancelCallback={errorCancel}
          />
        )}

        <MetamaskConnect setMetamaskOnClick={setMetamaskClick} />

        <InfoMessage text={infoMessage} type="success"></InfoMessage>

        {metamaskClick && <Account setMetamaskClick={setMetamaskClick} />}
        {props.children}
      </div>
    </div>
  )
}
export default Layout
