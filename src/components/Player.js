import React, { forwardRef, useEffect } from 'react'
import { useBox } from 'use-cannon'

const Player = forwardRef((props, fwRef) => {
  const [ref, api] = useBox(() => ({ mass: 1, args: [2,2,2], ...props }), fwRef)
  useEffect(() => {
    ref.current.api = api
  }, [ref])
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
})

export default Player
