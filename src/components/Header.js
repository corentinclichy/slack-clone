import React from "react";
import styled from "styled-components";

import { AccessTime } from "@styled-icons/material-outlined/AccessTime";

import { HelpOutline } from "@styled-icons/material-outlined/HelpOutline";

function Header({ user, signOut }) {
  return (
    <Container>
      <Main>
        <AccessTime size={25} />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutline size={25} />
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage onClick={signOut}>
          <img
            src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"}
            alt="avatar"
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: #350d36;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 1rem;
  margin-right: 1rem;
`;
const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104, 74, 104);
  border-radius: 6px;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    background: transparent;
    border: none;
    padding: 4px 8px;
    color: white;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding-right: 1rem;
`;
const UserImage = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid white;
  border-radius: 3px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
