import { useTexture } from '@react-three/drei'

export default function Sun() {
  const sunTexture = useTexture({
    map: 'sun.jpg',
  })

  return (
    <mesh position={[0, 0, -900]}>
      <circleGeometry args={[200, 60]} />
      <meshBasicMaterial opacity={0} color="#ff901f" />
    </mesh>
  )
}
