import { useState, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./home.module.sass";

export default function Home() {
  const schema = yup
    .object({
      name: yup
        .string()
        .required("Name is required")
        .matches(/^[A-Z][a-z]+$/, "Only letters")
        .min(2, "Not less 2 letters")
        .max(10, "Not more 10 letters"),
      mobileNumber: yup
        .string()
        .required("Mobile number is required")
        .matches(/^\d+$/, "Only numbers")
        .min(10, "Not less 10 numbers")
        .max(12, "Not more 10 numbers"),
      gender: yup.string().required().typeError("Select a gender"),
      color: yup
        .string()
        .required()
        .oneOf(["red", "green", "blue"], "Select a color"),
    })
    .required();

  const {
    setFocus,
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [resultPost, setResultPost] = useState(null);

  const onSubmit = (data) => {
    //Post method//

    const response = fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setResultPost("Good");
    } else {
      setResultPost("Bad");
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  });

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <Fragment>
      <form
        className={styles.registrationForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input placeholder="Name" type="text" {...register("name")} />
        <p>{errors.name?.message}</p>
        <input
          placeholder="Mobile number"
          type="text"
          {...register("mobileNumber")}
        />
        <p>{errors.mobileNumber?.message}</p>
        <input value="Male" type="radio" {...register("gender")} />
        <span>Male</span>
        <input value="Female" type="radio" {...register("gender")} />
        <span>Female</span>
        <p>{errors.gender?.message}</p>
        <select {...register("color")}>
          <option>Pick color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <p>{errors.color?.message}</p>
        <input type="submit" />
      </form>
      <span>{resultPost}</span>
    </Fragment>
  );
}
