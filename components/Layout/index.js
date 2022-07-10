import Head from 'next/head'
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
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
  const [infoMessageBoolean, setInfoMessageBoolean] = useState(false)
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

  useMemo(() => {
    if (errorMessage !== null) {
      setShowError(true)
      setTimeout(() => {
        errorCancel()
      }, [15000])
    }
  }, [errorMessage])

  useMemo(() => {
    if (infoMessage !== null) {
      enableInfoMessage()
      setTimeout(() => {
        infoMessageCancel()
      }, [5000])
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

        <InfoMessage type="success" text={infoMessage}></InfoMessage>

        {metamaskClick && <Account setMetamaskClick={setMetamaskClick} />}
        {props.children}
      </div>
    </div>
  )
}
export default Layout
