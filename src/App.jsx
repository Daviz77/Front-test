import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './views/Login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
