import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react'

export default function Loader() {
  const [show, setShow] = useState(true)
  const backgroundStyles = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 1000 },
    delay: 3000,
    onRest: () => setShow(false),
  })

  const contentStyles = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 500 },
    delay: 2000,
  })

  return (
    <>
      {show && (
        <animated.div className="loader-bg" style={backgroundStyles}>
          <animated.div style={contentStyles}>
            <h1>kosmos</h1>
            <div className="progress">
              <div className="progress-value"></div>
            </div>
          </animated.div>
        </animated.div>
      )}
    </>
  )
}
