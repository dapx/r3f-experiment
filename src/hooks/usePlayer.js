import React, {
  createRef,
  createContext,
  useContext,
  useEffect
} from 'react'

const PlayerApiStateContext = createContext()
const PlayerApiRegisterContext = createContext()

export default function PlayerApiProvider({ children }) {
  const api = createRef(null)
  const registerApi = (apiRef) => {
    console.info('APIREF: ', apiRef)
    api.current = apiRef
  }
  return (
    <PlayerApiStateContext.Provider value={api}>
      <PlayerApiRegisterContext.Provider value={registerApi}>
        {children}
      </PlayerApiRegisterContext.Provider>
    </PlayerApiStateContext.Provider>
  )
}

export function usePlayer() {
  const api = useContext(PlayerApiStateContext)
  if (api === undefined) 
    throw new Error('usePlayer must be used within a PlayerProvider')
  return api
}

export function usePlayerApiRegister() {
  const register = useContext(PlayerApiRegisterContext)
  if (register === undefined) 
    throw new Error('usePlayer must be used within a PlayerProvider')
  return register
}

export function usePlayerRegister(api) {
  const register = usePlayerApiRegister()
  return useEffect(() => {
    register(api)
  }, [api, register])
}
