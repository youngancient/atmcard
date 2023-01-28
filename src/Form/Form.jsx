import "./style.css";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { motion, AnimatePresence } from "framer-motion";

const formVariants = {
  initial: {
    x: "100vw",
  },
  final: {
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
  exit: {
    opacity : 0,
    transition: {
      duration: 1,
    },
  },
};

const Form = ({ cardDetails, setCardDetails, setSubmitted }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [defaultForm, setDefault] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleChange = (event, data) => {
    let stateVar = event.target.name;
    let stateVal = event.target.value;
    const aList = ["number", "month", "year", "cvc"];
    if (aList.includes(stateVar)) {
      stateVal = stateVal.replace(/\D/g, "");
    }
    setDefault({ ...defaultForm, [stateVar]: stateVal });
    setCardDetails({ ...cardDetails, [stateVar]: stateVal });
  };

  //  the function handling the on submit effects
  const onFormSubmit = (data) => {
    setDefault({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
    setSubmitted(true);
    console.log(data);
  };
  const handleError = (errors) => {};
  return (
    <motion.form
      className=""
      onSubmit={handleSubmit(onFormSubmit, handleError)}
      variants={formVariants}
      initial="initial"
      animate="final"
      // exit = "exit"  --> i dont know but when i use this, it pushes the form to the left before fadng out
      noValidate
    >
      <div className="form">
        <div className="element mt-1">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="e.g Jane Appleseed"
            className="mt-min"
            maxLength={18}
            {...register("name", { required: true, maxLength: 16 })}
            value={defaultForm.name}
            onChange={handleChange}
          />
          {errors.name && errors.name.type === "required" && (
            <p className="error">Name can't be blank</p>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <p className="error">Max length should be 16chars</p>
          )}
        </div>
        <div className="element mt-1">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type="text"
            name="cardNumber"
            id=""
            placeholder="e.g 1234 5678 9123 0000 (16 digits)"
            inputMode="numeric"
            pattern="[0-9]+"
            value={defaultForm.number}
            maxLength={16}
            {...register("number", {
              required: true,
              minLength: 16,
              maxLength: 16,
            })}
            onChange={handleChange}
            className={`mt-min ${errors?.number?.message ? "red" : ""}`}
          />
          {errors.number && errors.number.type === "required" && (
            <p className="error">Card number is required</p>
          )}
          {errors.number && errors.number.type === "maxLength" && (
            <p className="error">
              Max length is 16 digits ({16 - defaultForm.number.length}chars)
            </p>
          )}
          {errors.number && errors.number.type === "minLength" && (
            <p className="error">
              Card number should be 16 digits (+{16 - defaultForm.number.length}
              chars)
            </p>
          )}
        </div>
        <div className="element-2 mt-1">
          <div className="one">
            <label htmlFor="">EXP. DATE (MM/YY)</label>
            <div className="split mt-min">
              <input
                type="text"
                name="month"
                id=""
                max={12}
                min={1}
                maxLength={2}
                inputMode="numeric"
                placeholder="MM"
                pattern="/^[0-9\b]+$/"
                {...register("month", {
                  required: true,
                  maxLength: 2,
                  min: 1,
                  max: 12,
                })}
                value={defaultForm.month}
                onChange={handleChange}
              />
              <input
                type="text"
                name="year"
                id=""
                inputMode="numeric"
                placeholder="YY"
                maxLength={4}
                {...register("year", { required: true, maxLength: 4 })}
                value={defaultForm.year}
                onChange={handleChange}
              />
            </div>
            {errors.month && errors.month.type === "required" && (
              <p className="error">Month can't be blank</p>
            )}
            {errors.month && errors.month.type === "maxLength" && (
              <p className="error">Max length is 2</p>
            )}
            {errors.month && errors.month.type === "min" && (
              <p className="error">least month is 01</p>
            )}
            {errors.month && errors.month.type === "max" && (
              <p className="error">max month is 12</p>
            )}
          </div>
          <div className="two">
            <label htmlFor="cvc">CVC</label>
            <div className="split-1 mt-min">
              <input
                type="text"
                name="cvc"
                id=""
                inputMode="numeric"
                placeholder="e.g 123"
                maxLength={3}
                minLength={3}
                value={defaultForm.cvc}
                {...register("cvc", { required: true, maxLength: 3 })}
                onChange={handleChange}
              />
            </div>
            {errors.cvc && errors.cvc.type === "required" && (
              <p className="error">cvc can't be blank</p>
            )}
            {errors.cvc && errors.cvc.type === "maxLength" && (
              <p className="error">Max length is 3</p>
            )}
          </div>
        </div>
        <div className="btn">
          <button type="submit">Confirm</button>
        </div>
      </div>
    </motion.form>
  );
};

export default Form;
