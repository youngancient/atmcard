import { useState } from 'react'
import './App.css'
import Card from './Card/Card'
import Success from './Success/Success'
import Form from './Form/Form'

function App() {
  const [submitted, setsubmitted] = useState(false)

  return (
    <div className="App">
      <div className="main bdr">
        <Card />
        <div className="cont">
          {
            submitted ?
            <Success/>
            :
            <Form/>
          }
        </div>
      </div>
    </div>
  )
}

export default App
