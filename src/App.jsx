import { useState } from 'react'
import './App.css'
import Card from './Card/Card'
import Success from './Success/Success'
import Form from './Form/Form'

function App() {
  // set to false back ooo
  const [submitted, setsubmitted] = useState(false)
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <div className="App">
      <div className="main">
        <Card cardDetails={cardDetails} />
        <div className="cont">
          {
            submitted ?
            <Success/>
            :
            <Form cardDetails={cardDetails} setCardDetails={setCardDetails} />
          }
        </div>
      </div>
    </div>
  )
}

export default App
