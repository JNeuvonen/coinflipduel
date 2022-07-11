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
import { ethers } from 'ethers'
import { NETWORK } from '../utils/constants'
const MyApp = ({ Component, pageProps }) => {
  const {
    updateAccount,
    updateInfoMessage,
    updateInfoMessageTimeout,
    updateInfoMessageType,
  } = Updaters()
  const [coinFlips, setCoinflips] = useState([])
  const [coinFlipDuelContracts, setCoinflipHistories] = useState([])
  const account = useSelector((state) => state.account)
  const [ignoreFirst, setIgnoreFirst] = useState(false)
  const infoMessage = useSelector((state) => state.infoMessage)

  useEffect(() => {
    if (account) {
      if (account.length > 0) {
        const provider = ethers.getDefaultProvider(NETWORK)
        let lastBalance = ethers.constants.Zero
        let ignoreFirst = false
        provider.on('block', () => {
          provider.getBalance(account[0]).then((balance) => {
            if (!balance.eq(lastBalance)) {
              lastBalance = balance
              // convert a currency unit from wei to ether

              if (ignoreFirst) {
                if (infoMessage === null) {
                  updateInfoMessageTimeout(5000)
                  updateInfoMessage('Balance changed!')
                  updateInfoMessageType('success')
                }
              } else {
                ignoreFirst = true
              }
            }
          })
        })
      }
    }
  }, [account])
  useEffect(() => {
    const asyncHelper = async () => {
      const coinflipDuelAddresses = await factory.methods
        .getDeployedCoinflipDuels()
        .call()
      const coinFlipDuelContractsHelper = []
      const coinFlipsHelper = []
      const invidualCoinflips = []

      for (let i = 0; i < coinflipDuelAddresses.length; i++) {
        const coinflipDuel = await coinflipduel(coinflipDuelAddresses[i])
        const coinflipDuelHistory = await coinflipDuel.methods
          .getSummary()
          .call()

        if (coinflipDuelHistory[0].length > 0) {
          coinflipDuelHistory[0].forEach((item) => {
            invidualCoinflips.push(item)
          })
        }
        const dict = { contract: coinflipDuel, history: coinflipDuelHistory }
        coinFlipDuelContractsHelper.push(dict)

        if (coinflipDuelHistory[0].length > 0) {
          coinFlipsHelper.push(coinflipDuelHistory[0])
        }
      }
      setCoinflips(invidualCoinflips)
      setCoinflipHistories(coinFlipDuelContractsHelper)

      let accounts = await web3.eth.getAccounts()
      updateAccount(accounts)
    }

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async () => {
        let accounts = await web3.eth.getAccounts()
        updateAccount(accounts)
        updateInfoMessage('Changed account')
        updateInfoMessageTimeout(2500)
        updateInfoMessageType('success')
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
