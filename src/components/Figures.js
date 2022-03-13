import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/three'

function Figure({ item }) {
  const figure = useRef()
  const [active, setActive] = useState(false)
  const { scale } = useSpring({ scale: active ? 1.5 : 1 })

  const handleItemClick = (event) => {
    setActive((prevState) => !prevState)
  }

  useFrame(() => {
    figure.current.rotation.x += 0.02
    figure.current.rotation.z += 0.02
  })

  return (
    <animated.mesh
      ref={figure}
      position={item.position}
      scale={scale}
      onClick={(event) => handleItemClick(event)}
    >
      <meshLambertMaterial wireframe={!active} />
      {item.component}
    </animated.mesh>
  )
}

export default function () {
  const items = [
    { component: <icosahedronGeometry />, position: [5, 2, 15] },
    { component: <octahedronGeometry />, position: [-3, 2, -40] },
    { component: <tetrahedronGeometry />, position: [0, 2, -60] },
    { component: <coneGeometry />, position: [1, 2, -80] },
    { component: <icosahedronGeometry />, position: [0, 2, -100] },
    { component: <octahedronGeometry />, position: [1, 2, -120] },
    { component: <icosahedronGeometry />, position: [-2, 2, -140] },
    { component: <coneGeometry />, position: [1, 2, -160] },
    { component: <tetrahedronGeometry />, position: [2, 2, -180] },
    { component: <octahedronGeometry />, position: [3, 2, -200] },
    { component: <icosahedronGeometry />, position: [1, 2, -220] },
    { component: <coneGeometry />, position: [-2, 2, -240] },
  ]

  return items.map((item, index) => <Figure key={index} item={item} />)
}
