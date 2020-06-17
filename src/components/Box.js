import React from 'react'
import { useBox } from 'use-cannon'

function Box({ position, onClick }) {
  const [ref] = useBox(() => ({ mass: 1, position, rotation: [1, 1, 1], args: [1,1,1] }))
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
    >
      <boxBufferGeometry attach="geometry" args={[1,1,1]} castShadow receiveShadow />
      <meshPhysicalMaterial attach="material" color="red" castShadow receiveShadow />
    </mesh>
  )
}

export default Box
