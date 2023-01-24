import "./style.css";

const Card = ({cardDetails}) => {
  return (
    <div className="card">
      <div className="back">
        <img src="/assets/bg-card-back.png" alt="back of card" className="" />
        <div className="back-p">
          {
            cardDetails.cvc === "" 
            ? <p>000</p>
            : <p>{cardDetails.cvc}</p>
          }
        </div>
      </div>
      <div className="atmcard">
        <img src="/assets/bg-card-front.png" alt="front of card" className="" />
        <div className="content">
          <div className="logo">
            <img src="/assets/card-logo.svg" alt="logo" className="" />
          </div>
          <div className="number">
            <h2 style={{marginLeft : '0px'}}>0000</h2>
            <h2>0000</h2>
            <h2>0000</h2>
            <h2>0000</h2>
          </div>
          <div className="bottom">
          
            <p>JANE APPLESEED</p>
            <p>00/00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
