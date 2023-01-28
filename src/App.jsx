import { useState } from 'react'
import './App.css'
import Card from './Card/Card'
import Success from './Success/Success'
import Form from './Form/Form'
import { motion, AnimatePresence } from 'framer-motion'


const mainVariants = {
  initial :{
    opacity : 0
  },
  final :{
    opacity : 1,
    transition: {
      delay: 1,
      duration: 1.5,
      staggerChildren: 1,
    }
  }
}

function App() {
  // set to false back ooo
  const [submitted, setSubmitted] = useState(false)
  const [cardDetails, setCardDetails] = useState({
    name: "JANE APPLESEED",
    number: "0000000000000000",
    month: "00",
    year: "0000",
    cvc: "000",
  });

  return (
    <div className="App">
      <motion.div className="main"
      variants={mainVariants}
      initial = "initial"
      animate = "final"
      >
        <Card cardDetails={cardDetails} />
        <div className="cont">
          <AnimatePresence>
            {
              submitted ?
              <Success key={2}/>
              :
              <Form key={1} cardDetails={cardDetails} setCardDetails={setCardDetails} setSubmitted={setSubmitted} />
            }
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

export default App
