import { width } from '@mui/system'
import React, { useEffect, useRef } from 'react'
import btcJSON from '../../assets/JSON/icons8-bitcoin (1).json'
import lottie from 'lottie-web/build/player/lottie_light'
import PermaLoopAnimation from '../PermaLoopAnimation'
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <PermaLoopAnimation
        width={150}
        height={150}
        centered={true}
        speed={1}
        animJSON={btcJSON}
      />
    </div>
  )
}
export default LoadingSpinner
