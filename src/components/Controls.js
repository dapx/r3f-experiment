import React, { useRef } from 'react';
import { useThree, extend, useFrame } from 'react-three-fiber';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
import useKeyboardMovement from '../hooks/useKeyboardMovement'
import usePointerLock from '../hooks/usePointerLock'

extend({ PointerLockControls })
const Controls = ({ playerRef, ...props}) => {
  const { gl, camera } = useThree()
  const ref = useRef()
  const keyboard = useKeyboardMovement()
  usePointerLock({
    target: window,
    ref
  })
  let yDownSpeed = 0
  const movingSpeed = 0.5
  const acc = 0.08
  const jumpingSpeed = -2.3
  useFrame(() => {
    const cameraRef = ref.current.getObject()
    const isOnFloor = cameraRef.position.y <= 1
    if (isOnFloor) {
      cameraRef.position.y = 1
      yDownSpeed = 0
    } else {
      yDownSpeed += acc
    }
    if (keyboard.jumping && isOnFloor) {
      yDownSpeed += jumpingSpeed
    }
    if (keyboard.moveForward) ref.current.moveForward(movingSpeed)
    if (keyboard.moveBackward) ref.current.moveForward(-movingSpeed)
    if (keyboard.moveRight) ref.current.moveRight(movingSpeed)
    if (keyboard.moveLeft) ref.current.moveRight(-movingSpeed)
    if (playerRef.current && playerRef.current.api) {
      playerRef.current.api.position.set(
        cameraRef.position.x,
        cameraRef.position.y,
        cameraRef.position.z,
        )
      playerRef.current.api.rotation.set(
        cameraRef.rotation.x,
        cameraRef.rotation.y,
        cameraRef.rotation.z,
        )
      }
      cameraRef.position.y -= yDownSpeed
      })
  return <pointerLockControls
    ref={ref}
    args={[camera, gl.domElement]}
    {...props}
  />
}

export default Controls
