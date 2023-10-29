import { useState } from "react";
import { styled } from "styled-components";

interface InputField {
  label: string;
  type: string;
  name: string;
  placholder: string;
  isPassword?: boolean;
  autoFocus?: boolean;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .filled {
    transform: translate(-16px, 2px) scale(0.8);
  }
`;

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  transform: translate(-16px, 23px) scale(1);
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  color: #6f81a5;
  font-size: 16px;
  line-height: 1;
  left: 16px;

  &:focus-within {
    transform: translate(0, 12px) scale(0.8);
    color: #0a53e4;
  }
`;

const Input = styled.input<{ isPassword?: boolean }>`
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0.25rem 0.25rem 0 0;
  padding: 24px 16px 4px 0px;
  font-size: 16px;
  line-height: 1;
  outline: none;
  box-shadow: none;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  width: 290px;

  &:focus {
  }
`;

export default function InputField({
  label,
  type = "text",
  name,
  placholder,
  isPassword,
  autoFocus,
}: InputField) {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const filled = value.length > 0 || focus ? "filled" : "";

  return (
    <>
      <Container>
        <Label className={filled}> {label}</Label>
        <Input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          type={isPassword ? "password" : type}
          name={name}
          placeholder={filled && placholder}
          value={value}
          onChange={handleChange}
          required
          autoFocus={autoFocus}
        />
      </Container>
    </>
  );
}
