import React from "react";
import classes from "./MyInput.module.css";

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={classes.myInput} />;
});

export default MyInput;

// export default  React.forwardRef (function MyInput (props, ref) {
//     return (
//         <input ref={ref} {...props} className={classes.myInput} />
//     );
// });
