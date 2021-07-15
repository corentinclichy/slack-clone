import React, { useState } from "react";
import styled from "styled-components";

import { Cross } from "@styled-icons/entypo/Cross";
import db from "../firebase";

function AddChannelModal({ toggleModal, setToggleModal }) {
  const [inputValue, setInputValue] = useState("");

  const hideModal = () => {
    setToggleModal(false);
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addChannel = () => {
    if (inputValue) {
      db.collection("rooms").add({ name: inputValue });
    }
    setToggleModal(false);
  };
  return (
    <Container active={toggleModal}>
      <Modal>
        <CrossButton size={20} onClick={hideModal} />
        <h1>Add a new Channel</h1>
        <input
          type="text"
          placeholder="Ex: Marketing, events, Hr, ..."
          onChange={inputHandler}
        />
        <button onClick={addChannel}>Add Channel</button>
      </Modal>
    </Container>
  );
}

export default AddChannelModal;

const Container = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.412);
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    props.active === true ? "translateX(0%)" : "translateX(-100%)"};
  opacity: ${(props) => (props.active === true ? "1" : "0")};
`;

const CrossButton = styled(Cross)`
  position: absolute;
  top: 10%;
  right: 5%;
  cursor: pointer;
`;

const Modal = styled.div`
  background: #ffffff;
  height: 40vh;
  width: 50%;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  input {
    height: 2rem;
    border: 1px solid lightgray;
    width: 50%;
    border-radius: 4px;
    padding: 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    background: #532753;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 1rem;
  }
`;
