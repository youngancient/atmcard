import "./style.css";

const Form = () => {
  return (
    <form action="" className="">
      <div className="form">
        <div className="element mt-1">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="e.g Jane Appleseed"
            className="mt-min"
          />
        </div>
        <div className="element mt-1">
          <label htmlFor="">CARD NUMBER</label>
          <input
            type="text"
            name="number"
            id=""
            placeholder="e.g 1234 5678 9123 0000"
            className="mt-min"
          />
          <p className="error">Wrong format, numbers only</p>
        </div>
        <div className="element-2 mt-1">
          <div className="one">
            <label htmlFor="">EXP. DATE (MM/YY)</label>
            <div className="split mt-min">
              <input type="number" name="month" id="" placeholder="MM" min={"01"} max={"12"} maxLength={"2"}/>
              <input type="text" name="year" id="" placeholder="YY" />
            </div>
            <p className="error">Can't be blank</p>
          </div>
          <div className="two">
            <label htmlFor="">CVC</label>
            <div className="split-1 mt-min">
              <input type="text" name="month" id="" placeholder="e.g 123" />
            </div>
            <p className="error">Can't be blank</p>
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
