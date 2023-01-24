import "./style.css";
import { useState } from "react";

const Form = ({cardDetails, setCardDetails}) => {
  const [error, setError] = useState({
    nameErr : '',
    cardNumberErr : '',
    monthErr : '',
    cvcErr : ''
  })
  const validateBlank = (stateVar, stateVal)=>{
    if(stateVal.length === 0){
      if(stateVar == "year"){
        setError({ ...error, [`monthErr`]: "Can't be blank"});
      }else{
        setError({ ...error, [`${stateVar}Err`]: "Can't be blank"})
      }
    }else{
      if(stateVar == "year"){
        setError({ ...error, [`monthErr`]: ""});
      }else{
        setError({ ...error, [`${stateVar}Err`]: ""})
      }
    }
  }
  const validateNum = (stateVar, stateVal, num)=>{
    console.log(num)
    if(stateVal.length !== num){
      if(stateVar == "year"){
        setError({ ...error, [`monthErr`]: `must be ${num} chars`});
      }else{
        setError({ ...error, [`${stateVar}Err`]: `must be ${num} chars[${num - stateVal.length} chars]` })
      }
    }else{
      if(stateVar == "year"){
        setError({ ...error, [`monthErr`]: ""});
      }else{
        setError({ ...error, [`${stateVar}Err`]: ""})
      }
    }
  }
  const handleChange = (event) => {
    let stateVar = event.target.name;
    let stateVal = event.target.value;
    let len = event.target.maxLength;
    setCardDetails({ ...cardDetails, [stateVar]: stateVal });
    validateBlank(stateVar, stateVal);
    validateNum(stateVar, stateVal, len);
  };
  const handleKeyUp = (event) =>{
    let stateVar = event.target.name;
    let stateVal = event.target.value;
    let len = event.target.maxLength;
    validateNum(stateVar, stateVal, len);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cardDetails);
    setCardDetails({
      name: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    });
  };
  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="form">
        <div className="element mt-1">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="e.g Jane Appleseed"
            className="mt-min"
            value={cardDetails.name}
            onChange={handleChange}
          />
          <p className="error"> {error.nameErr} </p>
        </div>
        <div className="element mt-1">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type= "number"
            name="cardNumber"
            id=""
            placeholder="e.g 1234 5678 9123 0000"
            className="mt-min"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            maxLength = "16"
          />
          <p className="error">{ error.cardNumberErr }</p>
        </div>
        <div className="element-2 mt-1">
          <div className="one">
            <label htmlFor="">EXP. DATE (MM/YY)</label>
            <div className="split mt-min">
              <input
                type="number"
                name="month"
                id=""
                placeholder="MM"
                min={"01"}
                max={"12"}
                maxLength= "2"
                value={cardDetails.month}
                onChange={handleChange}
              />
              <input
                type="number"
                name="year"
                id=""
                placeholder="YY"
                maxLength= "4"
                value={cardDetails.year}
                onChange={handleChange}
              />
            </div>
            <p className="error"> {error.monthErr} </p>
          </div>
          <div className="two">
            <label htmlFor="cvc">CVC</label>
            <div className="split-1 mt-min">
              <input
                type="number"
                name="cvc"
                id=""
                placeholder="e.g 123"
                value={cardDetails.cvc}
                onChange={handleChange}
                maxLength= "3"
              />
            </div>
            <p className="error"> { error.cvcErr } </p>
          </div>
        </div>
        <div className="btn">
          <button>Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
