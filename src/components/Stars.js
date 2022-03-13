import { Stars } from '@react-three/drei'

export default function () {
  return (
    <Stars
      radius={400}
      depth={50}
      count={5000}
      factor={8}
      saturation={1}
      fade
    />
  )
}
