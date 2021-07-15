import React, { useState } from "react";
import styled from "styled-components";
import MessageOptions from "./MessageOptions";

function Message({ text, timeStamp, user, userImage, userId }) {
  const [isHover, setIsHover] = useState(false);

  const showOptions = () => {
    setIsHover(!isHover);
  };

  const hideOptions = () => {
    setIsHover(!isHover);
  };
  return (
    <MessageContainer
      key={timeStamp}
      onMouseEnter={showOptions}
      onMouseLeave={hideOptions}
    >
      <MessageImage>
        <img src={userImage} alt="" />
      </MessageImage>
      <MessageContent>
        {isHover && (
          <MessageOptionsContainer>
            <MessageOptions user={user} timeStamp={timeStamp} userId={userId} />
          </MessageOptionsContainer>
        )}

        <MessageInfos>
          <Author>{user}</Author>
          <DateContainer>
            {new Date(timeStamp.toDate()).toUTCString()}
          </DateContainer>
        </MessageInfos>
        <MessageText>{text}</MessageText>
      </MessageContent>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  padding: 0.3rem;
  border-radius: 4px;
  transition: all 0.5s ease;
  margin: 2rem 0rem;
  position: relative;

  &:hover {
    background: #ebe9e9;
  }
`;
const MessageImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
  }
  margin-right: 0.5rem;
`;
const MessageContent = styled.div``;

const MessageInfos = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const Author = styled.div`
  font-weight: bold;
  padding-right: 0.4rem;
`;
const DateContainer = styled.div`
  color: rgb(188, 171, 188);
  font-size: 0.7rem;
`;
const MessageText = styled.div``;

const MessageOptionsContainer = styled.div`
  position: absolute;
  top: -30%;
  right: 2%;
`;
