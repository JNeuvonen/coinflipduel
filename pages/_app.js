import { useEffect, useState } from 'react'
import { Provider, useSelector } from 'react-redux'
import web3 from '../ethereum/web3'
import { store, wrapper } from '../state/store.js'
import Updaters from '../state/utils'
import '../style/css/style.css'
import factory from '../ethereum/factory'
import coinflipduel from '../ethereum/coinflipduel'
import App from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
const MyApp = ({ Component, pageProps }) => {
  const { updateAccount } = Updaters()
  const [coinFlips, setCoinflips] = useState([])
  const [coinFlipDuelContracts, setCoinflipHistories] = useState([])
  useEffect(() => {
    const asyncHelper = async () => {
      const coinflipDuelAddresses = await factory.methods
        .getDeployedCoinflipDuels()
        .call()
      const coinFlipDuelContractsHelper = []
      const coinFlipsHelper = []

      for (let i = 0; i < coinflipDuelAddresses.length; i++) {
        const coinflipDuel = await coinflipduel(coinflipDuelAddresses[i])
        const coinflipDuelHistory = await coinflipDuel.methods
          .getSummary()
          .call()
        const dict = { contract: coinflipDuel, history: coinflipDuelHistory }
        coinFlipDuelContractsHelper.push(dict)

        if (coinflipDuelHistory[0].length > 0) {
          coinFlipsHelper.push(coinflipDuelHistory[0])
        }
      }

      setCoinflips(coinFlipsHelper[0])
      setCoinflipHistories(coinFlipDuelContractsHelper)

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
        <Layout coinFlips={coinFlips}>
          <Component
            {...pageProps}
            coinFlipDuelContracts={coinFlipDuelContracts}
            coinFlips={coinFlips}
          />
        </Layout>
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
