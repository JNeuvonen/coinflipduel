import React from 'react'
import AccordionWrapper from '../components/Accordion'
import { TEXT } from '../utils/constants'
const Faq = () => {
  return (
    <>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>FAQ</h1>
      <AccordionWrapper
        accordionTitle={'Why?'}
        accordionDetails={'Why not?'}
        styles={{ marginTop: 20 }}
      />

      <AccordionWrapper
        accordionTitle={'I need ETH on Rinkeby testnet to try this thing'}
        accordionDetails={
          <>
            Get some from <a href="https://rinkebyfaucet.com/">here</a>
          </>
        }
        styles={{ marginTop: 2 }}
      />
    </>
  )
}
export default Faq
