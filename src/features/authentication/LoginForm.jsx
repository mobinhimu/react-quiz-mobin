import { HiAtSymbol, HiOutlineLockClosed } from "react-icons/hi2";

import Illustration from "../../ui/Illustration";
import illustration from "../../assets/images/login.svg";
import Form from "../../ui/Form";
import TextInput from "../../ui/TextInput";
import Button from "../../ui/Button";
import Info from "../../ui/Info";
import { useLogin } from "./useLogin";
import { useState } from "react";
import MiniLoader from "../../ui/MiniLoader";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userLoginInput, setUserLoginInput] = useState({});
  const navigate = useNavigate();
  const { login, isLoading } = useLogin();

  function handleSubmit(eve) {
    eve.preventDefault();

    const { enterEmail: email, enterPassword: password } = userLoginInput;

    if (!email && !password) return;

    login({ email, password }, { onSuccess: () => navigate("/videos") });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLoginInput({
      ...userLoginInput,
      [name]: value,
    });
  };

  return (
    <div className="column">
      <Illustration illustration={illustration} />
      <Form formType="login" onSubmit={handleSubmit}>
        <TextInput
          inputName="Enter email"
          type="email"
          onChange={handleChange}
          disabled={isLoading}
        >
          <HiAtSymbol />
        </TextInput>

        <TextInput
          inputName="Enter password"
          type="password"
          onChange={handleChange}
          disabled={isLoading}
        >
          <HiOutlineLockClosed />
        </TextInput>

        <Button disabled={isLoading} type="submit">
          {isLoading ? <MiniLoader /> : "Login"}
        </Button>

        <Info infoFor="login" />
      </Form>
    </div>
  );
}

export default LoginForm;
