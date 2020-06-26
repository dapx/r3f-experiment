import React from 'react'
import { useBox } from 'use-cannon'
import { usePlayerRegister } from '../hooks/usePlayer'

const Player = (props) => {
  const [ref, api] = useBox(() => ({ mass: 1, args: [2,2,2], ...props }))
  usePlayerRegister(api)
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
    >
      <boxBufferGeometry attach="geometry" args={[1,1,1]} castShadow receiveShadow />
      <meshPhysicalMaterial attach="material" color="blue" castShadow receiveShadow />
    </mesh>
  )
}

export default Player
