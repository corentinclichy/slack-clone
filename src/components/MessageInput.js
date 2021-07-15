import React, { useState } from "react";
import styled, { css } from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

import { Bolt } from "@styled-icons/fa-solid/Bolt";
import { Bold } from "@styled-icons/boxicons-regular/Bold";
import { TypeItalic } from "@styled-icons/bootstrap/TypeItalic";
import { Underline } from "@styled-icons/boxicons-regular/Underline";
import { CodeAlt } from "@styled-icons/boxicons-regular/CodeAlt";
import { ListOl } from "@styled-icons/boxicons-regular/ListOl";
import { ListUl } from "@styled-icons/boxicons-regular/ListUl";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";
import { Text } from "@styled-icons/ionicons-outline/Text";
import { EmojiSmile } from "@styled-icons/bootstrap/EmojiSmile";
import { Attach } from "@styled-icons/ionicons-outline/Attach";
import { Send } from "@styled-icons/material/Send";

function MessageInput({ sendMessage }) {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const send = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
    setInputValue("");
  };

  return (
    <InputForm>
      <input
        onChange={inputHandler}
        type="text"
        placeholder="Message # Channel 1"
        value={inputValue}
      />
      <SendMessagesButtons>
        <ButtonGroup1>
          <BoltButton size={"2.2rem"} />
          <Separator></Separator>
        </ButtonGroup1>
        <ButtonGroup2>
          <Bold size={"2.2rem"} />
          <TypeItalic size={"2.2rem"} />
          <Underline size={"2.2rem"} />
          <CodeAlt size={"2.2rem"} />
          <ListOl size={"2.2rem"} />
          <ListUl size={"2.2rem"} />
          <CodeBlock size={"2.2rem"} />
        </ButtonGroup2>
        <ButtonGroup3>
          <Text size={"2.2rem"} />
          <EmojiSmile size={"2.2rem"} />
          <Attach size={"2.2rem"} />
          <SendButton
            onClick={send}
            type="submit"
            className="sendBtn"
            disabled={inputValue.length < 1 ? "true" : "false"}
          >
            <Send size={"2.2rem"} className="Btn" />
          </SendButton>
        </ButtonGroup3>
      </SendMessagesButtons>
    </InputForm>
  );
}

export default MessageInput;

const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #818181;
  border-radius: 4px;
  overflow: hidden;
  input {
    flex: 1;
    border: none;
    border-radius: 4px;
    padding: 1rem 0.5rem;
    &:focus {
      outline: none;
    }
  }
`;

const SendMessagesButtons = styled.div`
  background: lightgray;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.3rem;
`;

const BoltButton = styled(Bolt)`
  color: white;
`;

const Separator = styled.div`
  width: 1px;
  height: 1.5rem;
  background: rgba(105, 105, 105, 0.637);
  margin-right: 0.5rem;
`;

const SendButton = styled.button``;

const ButtonGroup1 = styled.div`
  display: flex;
  align-items: center;
  ${StyledIconBase} {
    color: #585656;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 2px;
    /* icon styles go here */
    &:hover {
      background: rgba(43, 58, 190, 0.887);
      color: white;
    }
  }
`;
const ButtonGroup2 = styled.div`
  flex: 1;
  ${StyledIconBase} {
    color: #585656;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    /* icon styles go here */
    &:hover {
      background: rgba(105, 105, 105, 0.087);
    }
  }
`;
const ButtonGroup3 = styled.div`
  justify-self: flex-end;
  cursor: pointer;

  ${StyledIconBase} {
    color: #585656;
    padding: 0.5rem;
    border-radius: 4px;
    /* icon styles go here */
    &:hover {
      background: rgba(105, 105, 105, 0.087);
    }
  }

  .sendBtn {
    border: none;

    cursor: ${(props) => (props.disabled ? "default" : "pointer")};

    ${StyledIconBase} {
      color: #ffffff;
      padding: 0.5rem;
      border-radius: 4px;
      background: green;
      /* icon styles go here */
      &:hover {
        background: hsl(
          117.74436090225564,
          66.16915422885573%,
          39.411764705882355%
        );
      }
    }
  }
`;
