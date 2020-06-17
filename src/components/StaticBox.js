import React from 'react'

function StaticBox(props) {
  return (
    <mesh
      {...props}
      castShadow
      receiveShadow
    >
      <boxBufferGeometry attach="geometry" args={[1,1,1]} castShadow receiveShadow />
      <meshLambertMaterial attach="material" color="green" castShadow receiveShadow />
    </mesh>
  )
}

export default StaticBox
