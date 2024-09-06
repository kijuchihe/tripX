import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { auth } from '../firebase/config'

interface State {
  isAuthenticated: boolean
  isInitialized: boolean
  user: any
}

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
}

const reducer = (
  state: State,
  action: {
    type: 'INITIALIZE' | 'AUTHENTICATE' | 'UNAUTHENTICATE'
    payload?: any
  }
) => {
  switch (action.type) {
    case 'INITIALIZE':
      return { ...state, isInitialized: true }
    case 'AUTHENTICATE':
      return { ...state, isAuthenticated: true, user: action.payload }
    case 'UNAUTHENTICATE':
      return { ...state, isAuthenticated: false, user: null }
    default:
      return state
  }
}

const AuthContext = createContext<{
  state: State
  dispatch?: React.Dispatch<{
    type: 'INITIALIZE' | 'AUTHENTICATE' | 'UNAUTHENTICATE'
    payload?: any
  }>
}>({
  state: initialState,
})

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      if (user) {
        console.log(user)
        dispatch({ type: 'AUTHENTICATE', payload: user })
      } else {
        dispatch({ type: 'UNAUTHENTICATE' })
      }
    })
  }, [dispatch])
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
