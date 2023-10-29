import { styled } from "styled-components";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons";
import InputField from "../components/InputField";

const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  place-items: center;
  margin-bottom: 2rem;
`;

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  left: 15px;
`;

const Button = styled.div`
  background-color: black;
  color: white;
  width: 310px;
  text-align: center;
  padding: 0.75rem 0rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
`;

const Icon = styled.div`
  position: relative;
  top: 10px;
  right: 30px;
`;

export default function FormField() {
  const [passwordHide, setPasswordHide] = useState(false);
  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <InputField
          label='Username'
          name='username'
          type='text'
          placholder='name@example'
          autoFocus={true}
        />
        <PasswordContainer>
          <InputField
            label='Password'
            name='password'
            type='text'
            placholder='Password'
            isPassword={!passwordHide}
          />
          <Icon onClick={() => setPasswordHide(!passwordHide)}>
            <IconContext.Provider value={{ size: "30" }}>
              {passwordHide ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </IconContext.Provider>
          </Icon>
        </PasswordContainer>
        <Button> Login </Button>
      </Form>
    </>
  );
}
