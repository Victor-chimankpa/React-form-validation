import { useState } from "react";
import "./App.css";
import FormInputs from "./component/FormInputs";
const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });

  const Inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username",
      errormsg:
        "Username should be 3-16 characters and shouldn ' t include any special character! ",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },

    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Your Email",
      errormsg: "Should be a vilid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Your Dob",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Your password",
      errormsg:
        "Password should be 8-20 characters and include atleast 1 letter, 1 number amd 1 special character!",
      label: "Password",
      required: true,
      pattern:
        `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },

    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errormsg: "Passwords don't match!",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) =>{
e.preventDefault()
  }
  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Form Validation </h1>
        {Inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
