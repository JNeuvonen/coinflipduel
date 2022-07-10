import { width } from '@mui/system'
import React, { useEffect, useRef } from 'react'
import btcJSON from '../../assets/JSON/icons8-bitcoin (1).json'
import lottie from 'lottie-web/build/player/lottie_light'
import SpinningBtc from '../SpinningBtc'
const LoadingSpinner = () => {
  const animationContainer = useRef(null)
  const anim = useRef(null)

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: btcJSON,
      })

      return () => anim.current?.destroy()
    }
  }, [])
  return (
    <div className="loading-spinner">
      <SpinningBtc width={150} height={150} centered={true} />
    </div>
  )
}
export default LoadingSpinner