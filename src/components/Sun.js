import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

function Sun() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.z += 0.02))
  return (
    <>
      <group ref={ref}>
        <pointLight intensity={10} position={[0, 50, 10]}>
          <mesh position={[0, 0, 0]}>
            <sphereBufferGeometry attach="geometry" args={[2, 100, 100]} />
            <meshBasicMaterial attach="material" color="yellow" />
          </mesh>
        </pointLight>
      </group>
    </>
  )
}

export default Sun
