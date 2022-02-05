import React from "react";
import classes from "./MyButton.module.css";

export default function MyButton({ children, ...props }) {
  console.log("кнопка");
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
}
