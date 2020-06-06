import React from "react";

import { Container } from "./styles";

type HTMLInputElementProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface InputTextProps extends HTMLInputElementProps {
  label: string;
  containerClassName?: string;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  containerClassName,
  ...rest
}) => {
  return (
    <Container className={containerClassName}>
      <label htmlFor="repo">{label}</label>
      <input id="repo" type="text" {...rest} />
      <span />
    </Container>
  );
};

export default InputText;
