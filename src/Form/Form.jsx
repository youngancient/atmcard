import "./style.css";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";



const Form = ({ cardDetails, setCardDetails }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  //  the function handling the on submit effects
  const onFormSubmit = (data) => {
    console.log(data);
    console.log(register);
  };
  const handleError = (errors) => {};
  return (
    <form className="" onSubmit={handleSubmit(onFormSubmit, handleError)}>
      <div className="form">
        <div className="element mt-1">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="e.g Jane Appleseed"
            className="mt-min"
            {...register("name", { required: true, maxLength: 16 })}
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
            type="number"
            name="cardNumber"
            id=""
            placeholder="e.g 1234 5678 9123 0000"
            inputMode="numeric"
            className="mt-min"
            maxLength="16"
            {...register("number", {
              required: true,
              minLength: 16,
              maxLength: 16,
            })}
          />
          {errors.number && errors.number.type === "required" && (
            <p className="error">Card number is required</p>
          )}
          {errors.number && errors.number.type === "maxLength" && (
            <p className="error">Max length is 16 digits</p>
          )}
          {errors.number && errors.number.type === "minLength" && (
            <p className="error">Card number should be 16 digits</p>
          )}
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
                {...register("month", {
                  required: true,
                  maxLength: 2,
                  min: 1,
                  max: 12,
                })}
              />
              <input
                type="number"
                name="year"
                id=""
                placeholder="YY"
                maxLength="4"
                {...register("year", { required: true, maxLength: 4 })}
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
                type="number"
                name="cvc"
                id=""
                placeholder="e.g 123"
                maxLength="3"
                {...register("cvc", { required: true, maxLength: 3 })}
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
          <button>Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
