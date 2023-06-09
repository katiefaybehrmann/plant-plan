import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import styled from "styled-components";
import { Button } from "../styles";

function Login( {loggingIn, setLoggingIn}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      <Logo>PlantPlan - Denver</Logo>
      {showLogin ? (
        <>
          <LoginForm  loggingIn={loggingIn} setLoggingIn={setLoggingIn}/>
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm loggingIn={loggingIn} setLoggingIn={setLoggingIn}/>
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Logo = styled.h1`
font-family: "Gill Sans";
font-size: 3rem;
color: darkgreen;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;