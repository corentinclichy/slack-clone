import React from "react";
import styled from "styled-components";

//Auth
import { auth, provider } from "../firebase";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
          id: result.user.uid,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" />
        <h1>Sign in to Slack</h1>
        <SignInButton
          onClick={() => {
            signIn();
          }}
        >
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
  padding: 5rem 10rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SlackImg = styled.img`
  height: 30vh;
  margin-bottom: 1.5rem;
`;

const SignInButton = styled.button`
  border: none;
  margin-top: 4rem;
  background: #0a8d48;
  color: white;
  padding: 1rem;
  font-size: 1.1rem;
  border-radius: 5px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background: #0dc061;
  }
`;
