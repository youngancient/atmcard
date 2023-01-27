import "./style.css";
import { motion } from "framer-motion";


const cardVariants = {
  initial :{
    x: '-100vw'
  },
  final :{
    x : 0,
    transition: {
      delay: 1,
      duration: 1.5,
      staggerChildren: 1,
    }
  },
  frontFinal :{
    x : 0,
    transition: {
      delay: 1.5,
      duration: 1.5,
      staggerChildren: 1,
      type : 'spring',
      stiffness  :300
    }
  }
}

const Card = ({cardDetails}) => {
  const one = cardDetails.number.slice(0,4);
  const two = cardDetails.number.slice(4,8);
  const three = cardDetails.number.slice(8,12);
  const four = cardDetails.number.slice(12,16);
  return (
    <div className="card">
      <motion.div className="back"
      variants={cardVariants}
      initial = "initial"
      animate = "final"
      >
        <img src="/assets/bg-card-back.png" alt="back of card" className="" />
        <div className="back-p">
          {
            cardDetails.cvc === "" 
            ? <p>000</p>
            : <p>{cardDetails.cvc}</p>
          }
        </div>
      </motion.div>
      <motion.div className="atmcard"
      variants={cardVariants}
      initial = "initial"
      animate = "frontFinal"
      >
        <img src="/assets/bg-card-front.png" alt="front of card" className="" />
        <div className="content">
          <div className="logo">
            <img src="/assets/card-logo.svg" alt="logo" className="" />
          </div>
          <div className="number">
            <h2 style={{marginLeft : '0px'}}>{ one }</h2>
            <h2>{ two }</h2>
            <h2>{ three }</h2>
            <h2>{ four }</h2>
          </div>
          <div className="bottom">
            <p>{ cardDetails.name }</p>
            <p>{ cardDetails.month}/{cardDetails.year}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
