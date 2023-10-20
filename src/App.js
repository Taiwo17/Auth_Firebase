import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Dashboard from './components/auth/Dashboard'
import Homepage from './components/Homepage'

import { UserState } from './context/UserContext'
import Register from './components/auth/SignIn'

function App() {
  const { authUser } = UserState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        {authUser && <Route path='/dashboard' element={<Dashboard />} />}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
