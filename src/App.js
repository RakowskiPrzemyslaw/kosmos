import './App.css'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useRef, Suspense } from 'react'
import * as Curves from 'three/examples/jsm/curves/CurveExtras.js'
import * as THREE from 'three'
import {
  Stars,
  Tube,
  ScrollControls,
  Scroll,
  useScroll,
} from '@react-three/drei'

function Knot() {
  const tube = useRef()
  const { camera, clock } = useThree()
  const data = useScroll()

  const updateCamera = () => {
    // const time = clock.getElapsedTime()
    const time = data.scroll.current * 300
    const looptime = 20
    const t = (time % looptime) / looptime
    const t2 = ((time + 0.1) % looptime) / looptime

    const pos = tube.current.geometry.parameters.path.getPointAt(t)
    const pos2 = tube.current.geometry.parameters.path.getPointAt(t2)
    camera.position.copy(pos)
    camera.lookAt(pos2)
  }

  // const curve = new Curves.KnotCurve()
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 100),
    new THREE.Vector3(50, 0, 100),
  ])

  useFrame(() => {
    updateCamera()
  })

  return (
    <Tube ref={tube} args={[curve, 440, 3, 1, false]}>
      <meshBasicMaterial wireframe />
    </Tube>
  )
}

function App() {
  return (
    <Canvas>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      <ScrollControls
        pages={1}
        distance={100}
        damping={4}
        horizontal={false}
        infinite={false}
      >
        <Scroll>
          <Knot />
        </Scroll>
      </ScrollControls>

      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  )
}

export default App
