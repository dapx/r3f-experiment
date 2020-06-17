import { useEffect } from 'react';

/**
 * Allows to control the cursor behavior
 * @param {*} target window or document to add event listeners
 * @param {*} ref pointerLockControl reference to lock and unlock the cursor
 */
function usePointerLock({ target, ref }) {
  useEffect(() => {
    const onEscape = ({ key }) => {
      if (key === 'escape') ref.current && ref.current.unlock()
    }
    const onLock = () => {
      ref.current && ref.current.lock()
    }
    target.addEventListener('click', onLock)
    target.addEventListener('keydown', onEscape)
    return () => {
      target.removeEventListener('click', onLock)
      target.removeEventListener('keydown', onEscape)
    }
  }, [target, ref])
}

export default usePointerLock