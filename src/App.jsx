import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import Auth from './Routes/auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Auth />

    </div>
  )
}

export default App
