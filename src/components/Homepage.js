import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
      <h1 style={{ color: 'white' }}>This is Home page</h1>
      <div
        style={{
          marginTop: '25px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <Link style={{ color: 'white', fontSize: '18px' }} to={'/signin'}>
          Signin
        </Link>
        <Link style={{ color: 'white', fontSize: '18px' }} to={'/login'}>
          Login
        </Link>
      </div>
    </>
  )
}

export default Homepage
