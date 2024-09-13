import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { auth } from '../firebase/config'
import { getRedirectResult } from 'firebase/auth'

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
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          // The user is signed in
          const user = result.user
          console.log('Signed in user:', user)
        } else {
          // No user is signed in
          console.log('No user signed in')
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error retrieving redirect result:', error)
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
