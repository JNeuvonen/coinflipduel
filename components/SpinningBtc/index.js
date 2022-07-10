import React, { useEffect, useRef } from 'react'
import btcJSON from '../../assets/JSON/icons8-bitcoin (1).json'
import lottie from 'lottie-web/build/player/lottie_light'

const SpinningBtc = ({ width, height, centered }) => {
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
    <div
      ref={animationContainer}
      style={{ width, height }}
      className={centered ? 'centered' : null}
    ></div>
  )
}
export default SpinningBtc
