import { useState } from 'react'
import Home from '../components/Home'
import AboutUs from '../components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    <AboutUs />
    </>
  )
}

export default App