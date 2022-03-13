import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Terrain() {
  const terrainTexture = useTexture({
    map: 'grid2.jpg',
    displacementMap: 'hmap3.jpeg',
  })

  terrainTexture.map.wrapS = THREE.RepeatWrapping
  terrainTexture.map.wrapT = THREE.RepeatWrapping

  terrainTexture.displacementMap.wrapT = THREE.UVMapping
  terrainTexture.displacementMap.wrapS = THREE.UVMapping

  terrainTexture.map.repeat.set(4, 60)

  return (
    <mesh position={[0, 0, -400]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 1000, 100, 1000]} />
      <meshStandardMaterial displacementScale={10} {...terrainTexture} />
    </mesh>
  )
}
