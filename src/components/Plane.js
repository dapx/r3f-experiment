import React from 'react'
import { usePlane } from 'use-cannon'

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} receiveShadow />
      <meshPhysicalMaterial attach="material" color="black" receiveShadow/>
    </mesh>
  )
}

export default Plane
