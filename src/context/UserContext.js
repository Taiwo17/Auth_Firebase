import React from 'react'
import { useEffect, useState, createContext, useContext } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const UserContext = createContext({}) // Define the storage context

export function UserProvider({ children }) {
  const [authUser, setAuthUser] = useState(null)
  const [checkStatus, setCheckStatus] = useState(true)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
        setCheckStatus(false)
      } else {
        setAuthUser(null)
        setCheckStatus(true)
      }
    })
    return () => {
      listen()
    }
  }, [])

  const userOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <UserContext.Provider value={{ authUser, checkStatus, userOut }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserState = () => {
  return useContext(UserContext)
}

export default UserContext
