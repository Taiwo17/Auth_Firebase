import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './signin.css'
import { auth } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    /*     createUserWithEmailAndPassword(auth, email, password)
      .then((user) => console.log(user))
      .catch((error) => console.log(error.message)) */

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
      navigate('/dashboard')
    } catch (error) {
      console.log(error.message)
    }

    setEmail('')
    setPassword('')
  }
  return (
    <>
      <div className='signup-container'>
        <form action='' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type='submit'>Sign In</button>
          </div>
        </form>
        <Link style={{ marginTop: '25px' }} to='/login'>
          Login
        </Link>
      </div>
    </>
  )
}

export default Register
