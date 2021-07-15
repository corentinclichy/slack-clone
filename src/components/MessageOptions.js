import React from "react";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import emoji from "react-easy-emoji";
import { useParams } from "react-router-dom";

import { ChatText } from "@styled-icons/bootstrap/ChatText";
import { ShareForward } from "@styled-icons/remix-line/ShareForward";
import { Bookmark } from "@styled-icons/bootstrap/Bookmark";
import { Delete } from "@styled-icons/material-outlined/Delete";
import { auth } from "../firebase";

import db from "../firebase";

function MessageOptions({ timeStamp, userId }) {
  let { channelId } = useParams();

  let currentUser = auth.currentUser;

  const currentUserId = currentUser.uid;

  const deleteMessage = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .where("timeStamp", "==", timeStamp)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });
  };

  return (
    <Container>
      <p>{emoji("✅")}</p>
      <p>{emoji("👀")}</p>
      <p>{emoji("🙌")}</p>
      <ChatText size={"2.3rem"} />
      <ShareForward size={"2.3rem"} />
      <Bookmark size={"2.3rem"} />

      {currentUserId === userId && (
        <Delete onClick={deleteMessage} size={"2.3rem"} className="deleteBtn" />
      )}
    </Container>
  );
}

export default MessageOptions;

const Container = styled.div`
  background: white;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  position: relative;
  p {
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
      background: lightgray;
      border-radius: 5px;
    }
  }

  ${StyledIconBase} {
    padding: 0.5rem;
    color: #797878;
    cursor: pointer;
    /* icon styles go here */

    &:hover {
      background: lightgray;
      border-radius: 5px;
    }
  }

  .deleteBtn {
    &:hover {
      background: rgba(255, 0, 0, 0.321);
    }
  }
`;
