import "./style.css";

const Success = () => {
  return (
    <div className="success">
      <svg
        width="80"
        height="80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="40" fill="url(#a)" />
        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
        <defs>
          <linearGradient
            id="a"
            x1="-23.014"
            y1="11.507"
            x2="0"
            y2="91.507"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6348FE" />
            <stop offset="1" stop-color="#610595" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="mt-2">THANK YOU!</h2>
      <p className="mt-3">We've added your card details</p>
      <div className="btn-s mt-2">
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Success;
