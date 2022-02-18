import React from "react";
import useInput from "../../hooks/useInput";

const Form = () => {
  const login = useInput("");
  const password = useInput("");

  return (
    <div>
      <input {...login} type="text" placeholder="login" />
      <input {...password} type="text" placeholder="password" />
      <button onClick={() => console.log(login.value, password.value)}>
        Click
      </button>
    </div>
  );
};

export default Form;
