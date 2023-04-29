import React, { useState } from "react";
import "./FormInputs.css";

const FormInputs = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errormsg, id, ...inputprops } = props;

  const handleFocused = (e) => {
    setFocused(true);
  };
  return (
    <div className="FormInputs">
      <label>{label}</label>
      <input
        {...inputprops}
        onChange={onChange}
        onBlur={handleFocused}
        onFocus={() => inputprops.name === 'confirmpassword' && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errormsg}</span>
    </div>
  );
};

export default FormInputs;
