import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const googleClientId = process.env.REACT_APP_GoogleClientId;

const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: googleClientId,
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)