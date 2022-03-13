import { EffectComposer, Bloom, Scanline } from '@react-three/postprocessing'
import { Suspense } from 'react'

export default function Postprocessing() {
  return (
    <Suspense fallback={null}>
      <EffectComposer smaa>
        <Bloom intensity={1.0} luminanceThreshold={0.1} />
        <Scanline density={4} />
      </EffectComposer>
    </Suspense>
  )
}
