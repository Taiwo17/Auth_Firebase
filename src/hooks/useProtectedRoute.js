import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

export function useProtectedRoute() {
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

  return { authUser, checkStatus, userOut }
}
