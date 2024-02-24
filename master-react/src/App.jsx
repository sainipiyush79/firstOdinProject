import { useState } from 'react'
import './App.css'
import AboutMe from './components/About-me.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AboutMe />
      </div>
      
    </>
  )
}

export default App
