import { useEffect, useState } from 'react'
import { Provider, useSelector } from 'react-redux'
import web3 from '../ethereum/web3'
import { store, wrapper } from '../state/store.js'
import Updaters from '../state/utils'
import '../style/css/style.css'
import factory from '../ethereum/factory'
import coinflipduel from '../ethereum/coinflipduel'
import App from 'next/app'
const MyApp = ({ Component, pageProps, coinFlipDuelContracts, coinFlips }) => {
  const { updateAccount } = Updaters()
  useEffect(() => {
    const asyncHelper = async () => {
      let accounts = await web3.eth.getAccounts()
      updateAccount(accounts)
    }

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async () => {
        let accounts = await web3.eth.getAccounts()
        updateAccount(accounts)
      })
    }
    asyncHelper()
  }, [])

  return (
    <>
      <Provider store={store}>
        <Component
          {...pageProps}
          coinFlipDuelContracts={coinFlipDuelContracts}
          coinFlips={coinFlips}
        />
      </Provider>
    </>
  )
}

MyApp.getInitialProps = async (context) => {
  const coinflipDuelAddresses = await factory.methods
    .getDeployedCoinflipDuels()
    .call()
  const coinFlipDuelContracts = []
  let coinFlips = []

  const pageProps = await App.getInitialProps(context)

  for (let i = 0; i < coinflipDuelAddresses.length; i++) {
    const coinflipDuel = await coinflipduel(coinflipDuelAddresses[i])
    const coinflipDuelHistory = await coinflipDuel.methods.getSummary().call()
    const dict = { contract: coinflipDuel, history: coinflipDuelHistory }
    coinFlipDuelContracts.push(dict)

    if (coinflipDuelHistory[0].length > 0) {
      coinFlips.push(coinflipDuelHistory[0])
    }
  }

  return { ...pageProps, coinFlipDuelContracts, coinFlips: coinFlips[0] }
}

export default wrapper.withRedux(MyApp)
