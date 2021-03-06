import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { Provider, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import coinflipduel from '../ethereum/coinflipduel'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import { store, wrapper } from '../state/store.js'
import Updaters from '../state/utils'
import '../style/css/style.css'
import { NETWORK } from '../utils/constants'
import { useMediaQuery } from '@mui/material'
import Head from 'next/head'
import Web3 from 'web3'

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
  const infoMessage = useSelector((state) => state.infoMessage)
  const [network, setNetwork] = useState(null)
  const mobile = useMediaQuery('(max-width:600px)')

  useEffect(() => {
    if (mobile) {
      updateInfoMessage(
        'This site has limited support for mobile devices since Web3 wallets are currently not supported for mobile phones currently.'
      )
      updateInfoMessageTimeout(60000)
      updateInfoMessageType('failure')
    }
  }, [])

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
                  updateInfoMessageTimeout(60000)
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
      const network = await web3.eth.net.getNetworkType()
      if (network !== 'rinkeby') {
        try {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: Web3.utils.toHex(4) }],
            })
          } catch (err) {
            if (err.message === 'User rejected the request.') {
              updateInfoMessageTimeout(60000)
              updateInfoMessage(
                'This website has limited functionality without the correct network'
              )
              updateInfoMessageType('failure')
            } else {
              updateInfoMessageTimeout(60000)
              updateInfoMessage(err.message)
              updateInfoMessageType('failure')
            }
          }
        } catch (err) {}
      } else {
        setNetwork('rinkeby')
      }
    }
    asyncHelper()
  }, [])
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

    if (window) {
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', async () => {
          let accounts = await web3.eth.getAccounts()
          updateAccount(accounts)
          updateInfoMessage('Changed account')
          updateInfoMessageTimeout(2500)
          updateInfoMessageType('success')
        })

        window.ethereum.on('networkChanged', function (networkId) {
          updateInfoMessage('Network changed')
          updateInfoMessageTimeout(2500)
          updateInfoMessageType('success')
          const asyncHelper = async () => {
            const network = await web3.eth.net.getNetworkType()
            setNetwork(network)
          }
          asyncHelper()
        })
      }
    }

    if (network === 'rinkeby') {
      asyncHelper()
    }
  }, [network])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, maximum-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Coinflip.app" />
        <title>Coinflip.app</title>
      </Head>

      <Provider store={store}>
        <Layout coinFlips={coinFlips} setNetwork={setNetwork} network={network}>
          <Component
            {...pageProps}
            coinFlipDuelContracts={coinFlipDuelContracts}
            coinFlips={coinFlips}
            network={network}
            setNetwork={setNetwork}
          />
        </Layout>
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
