import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as Curves from 'three/examples/jsm/curves/CurveExtras.js'
import * as THREE from 'three'
import { Tube, useScroll } from '@react-three/drei'

export default function Route() {
  const tube = useRef()
  const light = useRef()
  const { camera, clock } = useThree()
  const data = useScroll()

  const updateCamera = () => {
    const time = data.scroll.current * 60 + clock.getElapsedTime() / 5
    const looptime = 40
    const t = (time % looptime) / looptime
    const t2 = ((time + 0.1) % looptime) / looptime

    const pos = tube.current.geometry.parameters.path.getPointAt(t)
    const pos2 = tube.current.geometry.parameters.path.getPointAt(t2)
    camera.position.copy(pos)
    light.current.position.copy(pos)
    camera.lookAt(pos2)
  }

  // const curve = new Curves.KnotCurve()
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 2, 45),
    new THREE.Vector3(3, 2, 15),
    new THREE.Vector3(4, 2, -15),
    new THREE.Vector3(2, 3, -35),
    new THREE.Vector3(0, 3, -55),
    new THREE.Vector3(0, 2, -75),
    new THREE.Vector3(-2, 2, -95),
    new THREE.Vector3(-3, 3, -115),
    new THREE.Vector3(-1, 2, -145),
    new THREE.Vector3(0, 2, -170),
    new THREE.Vector3(0, 2, -200),
    new THREE.Vector3(1, 1, -230),
    new THREE.Vector3(1, 1, -260),
    new THREE.Vector3(0, 2, -300),
  ])

  useFrame(() => {
    updateCamera()
  })

  return (
    <>
      <Tube ref={tube} args={[curve, 440, 3, 1, false]}>
        <meshBasicMaterial visible={false} />
      </Tube>
      <pointLight ref={light} color="#ffd319" />
    </>
  )
}
