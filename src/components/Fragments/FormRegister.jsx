import Button from "../Elements/Button/";
import InputForm from "../Elements/Input/";
import { useEffect, useRef } from "react";


const FormRegister = () => {
  const fullNameRef = useRef(null);

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);
  
  return (
    <form action="">
        <InputForm
          label="Full Name"
          type="text"
          placeholder="insert your name"
          name="fullname"
          ref={fullNameRef}
        />
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
        />
        <InputForm
          label="Confirm Password"
          type="password"
          placeholder="******"
          name="confirmPassword"
        />
        <Button classname="bg-blue-600 w-full">Register</Button>
      </form>
  );
};

export default FormRegister;