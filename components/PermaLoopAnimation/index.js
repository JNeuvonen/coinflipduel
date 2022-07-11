import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web/build/player/lottie_light'

const PermaLoopAnimation = ({ width, height, centered, speed, animJSON }) => {
  const animationContainer = useRef(null)
  const anim = useRef(null)

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animJSON,
      })
      anim.current.setSpeed(speed)

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
export default PermaLoopAnimation
