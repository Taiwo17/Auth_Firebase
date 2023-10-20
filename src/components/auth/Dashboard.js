import React from 'react'
import { UserState } from '../../context/UserContext'
import Login from './Login'

const btnStyle = {
  marginTop: '25px',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
}
function Dashboard() {
  const { authUser, userOut } = UserState()

  return (
    <div>
      {authUser ? <p>Sign in as {authUser?.email}</p> : <Login />}

      <button style={btnStyle} onClick={userOut}>
        Sign out
      </button>
    </div>
  )
}

export default Dashboard
