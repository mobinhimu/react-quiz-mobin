import {
  HiAtSymbol,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi2";

import illustration from "../../assets/images/signup.svg";
import Illustration from "../../ui/Illustration";
import Form from "../../ui/Form";
import TextInput from "../../ui/TextInput";
import Button from "../../ui/Button";
import Info from "../../ui/Info";
import { useState } from "react";
import Message from "../../ui/Message";
import { useSignup } from "./useSignup";
import MiniLoader from "../../ui/MiniLoader";

function SignUpForm() {
  const [signUpInput, setSignUpInput] = useState({});
  const { signUp, isLoading } = useSignup();

  function handleChange(eve) {
    const { name, value } = eve.target;

    setSignUpInput({
      ...signUpInput,
      [name]: value,
    });
  }

  const {
    enterEmail: email,
    enterPassword: password,
    confirmPassword,
    enterName: fullName,
  } = signUpInput;

  function handleSubmit(eve) {
    eve.preventDefault();

    if (
      !confirmPassword ||
      !email ||
      !password ||
      !fullName ||
      confirmPassword !== password
    )
      return;

    signUp({ email, password, fullName });
  }

  return (
    <div className="column">
      <Illustration illustration={illustration} />
      <Form formType="signup" onSubmit={handleSubmit}>
        <TextInput
          disabled={isLoading}
          inputName="Enter name"
          type="text"
          onChange={handleChange}
        >
          <HiOutlineUser />
        </TextInput>

        <TextInput
          disabled={isLoading}
          inputName="Enter email"
          type="email"
          onChange={handleChange}
        >
          <HiAtSymbol />
        </TextInput>

        <TextInput
          disabled={isLoading}
          inputName="Enter password"
          type="password"
          onChange={handleChange}
        >
          <HiOutlineLockClosed />
        </TextInput>

        <TextInput
          disabled={isLoading}
          inputName="Confirm password"
          type="password"
          onChange={handleChange}
        >
          <HiOutlineLockClosed />
        </TextInput>

        {confirmPassword !== password ? (
          password?.length < 6 ? (
            <Message status="wrong">
              Password should be at least 6 characters
            </Message>
          ) : (
            <Message status="wrong">Password Did Not Match</Message>
          )
        ) : null}

        <label>
          <input type="checkbox" required defaultChecked />
          <span> I agree to the Terms & Conditions</span>
        </label>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <MiniLoader /> : "Submit"}
        </Button>

        <Info infoFor="signup" />
      </Form>
    </div>
  );
}

export default SignUpForm;
