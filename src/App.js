import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll, Sky } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

import Route from './components/Route'
import Terrain from './components/Terrain'
import Postprocessing from './components/Postprocessing'
import Sun from './components/Sun'
import Stars from './components/Stars'
import Figures from './components/Figures'

const debug = false

function App() {
  return (
    <Canvas>
      {debug && <OrbitControls />}
      <Postprocessing />
      <Stars />
      <Sky
        turbidity={10}
        mieCoefficient={0.01}
        mieDirectionalG={0.9}
        rayleigh={10}
        distance={450000}
        inclination={0.01}
        azimuth={0.25}
      />

      <Figures />
      <Suspense fallback={null}>
        <Terrain />
        <Sun />
      </Suspense>
      <ScrollControls
        pages={1}
        distance={100}
        damping={4}
        horizontal={false}
        infinite={true}
      >
        <Scroll>{!debug && <Route />}</Scroll>
      </ScrollControls>
      <ambientLight color="#1338be" />
      <pointLight color="#d90077" position={[10, 10, 10]} />
      <pointLight color="#d90077" position={[10, 10, -200]} />
    </Canvas>
  )
}

export default App
