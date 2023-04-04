import React, { useState, useRef } from "react";
import styled from "styled-components";
const Input = styled.input`
  width: 250px;
  height: 30px;
  margin: 10px;
  box-sizing: border-box;
`;
type TCred = {
  email: string;
  password: string;
};

interface IProps {
  onSubmitHandler: (cred: TCred) => void;
}

const Form = ({ onSubmitHandler }: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ref = useRef<HTMLFormElement | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        console.warn(`Unknown name of input - ${name}`);
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitHandler({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={onSubmit} style={{ marginTop: 50 }} ref={ref}>
      <label>
        Email
        <Input type="mail" name="email" onChange={onChange} value={email} />
      </label>

      <label>
        Password
        <Input
          type="password"
          name="password"
          onChange={onChange}
          value={password}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default Form;
