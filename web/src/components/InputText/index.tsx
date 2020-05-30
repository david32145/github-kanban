import React from "react";

import { Container } from "./styles";

type HTMLInputElementProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface InputTextProps extends HTMLInputElementProps {
  label: string;
}

const InputText: React.FC<InputTextProps> = ({ label, ...rest }) => {
  return (
    <Container>
      <label htmlFor="repo">{label}</label>
      <input
        id="repo"
        type="text"
        placeholder="Search in your repository"
        {...rest}
      />
      <span />
    </Container>
  );
};

export default InputText;
