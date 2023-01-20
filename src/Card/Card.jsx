import "./style.css";

const Card = () => {
  return (
    <div className="card bdr">
      <div className="back bdr">
        <img src="/assets/bg-card-back.png" alt="back of card" className="" />
      </div>
      <div className="atmcard bdr">
        <img src="/assets/bg-card-front.png" alt="front of card" className="" />
        <div className="content">
          <div className="logo">
            <img src="/assets/card-logo.svg" alt="logo" className="" />
          </div>
          <div className="number">
            <h2>0000</h2>
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
