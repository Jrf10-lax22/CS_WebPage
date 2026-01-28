import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class='main'>
    <div class='main2'>
      <div class='main_button'>
        <button class='boton'>About</button>
        <button class='boton'>Staff</button>
        <button class='boton'>Classes</button>
        <button class='boton'>Events</button>
        <button class='boton'>Projects</button>
      </div>

      <div class='content'>
        <h1>Content</h1>
      </div>
    </div>

    </div>
    </>
  )
}

export default App
