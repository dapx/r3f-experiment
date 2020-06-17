import { useState, useEffect } from 'react';

const useKeyboardMovement = () => {
  const [state, setState] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jumping: false,
  })
  const onKeyDown = ({ key }) => {
    if (key === 'w') {
      setState(previousState => ({ ...previousState, moveForward: true }))
    } else if (key === 's') {
      setState(previousState => ({ ...previousState, moveBackward: true }))
    } else if (key === 'a') {
      setState(previousState => ({ ...previousState, moveLeft: true }))
    } else if (key === 'd') {
      setState(previousState => ({ ...previousState, moveRight: true }))
    } else if (key === " ") {
      setState(previousState => ({ ...previousState, jumping: true }))
    }
  }
  const onKeyUp = ({ key }) => {
    if (key === 'w') {
      setState(previousState => ({ ...previousState, moveForward: false }))
    } else if (key === 's') {
      setState(previousState => ({ ...previousState, moveBackward: false }))
    } else if (key === 'a') {
      setState(previousState => ({ ...previousState, moveLeft: false }))
    } else if (key === 'd') {
      setState(previousState => ({ ...previousState, moveRight: false }))
    } else if (key === " ") {
      setState(previousState => ({ ...previousState, jumping: false }))
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])
  return state
}

export default useKeyboardMovement
