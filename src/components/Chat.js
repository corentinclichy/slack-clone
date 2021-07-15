import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import firebase from "firebase";

//Components
import MessageInput from "./MessageInput";
import Message from "./Message";

//Icons
import { Info } from "@styled-icons/material-outlined/Info";
import { StarBorder } from "@styled-icons/material/StarBorder";

import db from "../firebase";

function Chat({ user }) {
  let { channelId } = useParams();

  const messagesEndRef = useRef(null);

  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        timeStamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userId: user.id,
        userImage: user.photo,
      };
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
    }
  };

  useEffect(() => {
    const getChannel = () => {
      db.collection("rooms")
        .doc(channelId)
        .onSnapshot((snapshot) => {
          setChannel(snapshot.data());
        });
    };
    const getMessages = () => {
      db.collection("rooms")
        .doc(channelId)
        .collection("messages")
        .orderBy("timeStamp", "asc")
        .onSnapshot((snapshot) => {
          let messages = [];
          messages = snapshot.docs.map((doc) => doc.data());
          setMessages(messages);
        });
    };
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <ChatHeader>
        <HeaderInfos>
          <ChannelName>
            <Name># {channel && channel.name}</Name>
            <StartButton size={15} />
          </ChannelName>
          <Description>
            Company-wide annoucements and work-based matters
          </Description>
        </HeaderInfos>
        <HeaderDetails>
          <Details>Details</Details>
          <Info size={25} />
        </HeaderDetails>
      </ChatHeader>
      <ChatMain>
        {messages.length > 0
          ? messages.map(({ text, timeStamp, user, userImage, userId }) => (
              <Message
                text={text}
                user={user}
                userImage={userImage}
                timeStamp={timeStamp}
                userId={userId}
                key={timeStamp}
              />
            ))
          : "Let's start the conversations"}
        <div ref={messagesEndRef} />
      </ChatMain>
      <ChatInput>
        <MessageInput sendMessage={sendMessage} />
      </ChatInput>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 5rem auto min-content;
  min-height: 0;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
  justify-content: space-between;
  border-bottom: 1px solid hsla(0, 0%, 63.13725490196078%, 0.322);
`;
const HeaderInfos = styled.div``;
const ChannelName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Name = styled.div`
  font-weight: bold;
  padding-right: 0.4rem;
`;

const StartButton = styled(StarBorder)`
  font-weight: bold;
`;

const Description = styled.div`
  color: rgb(188, 171, 188);
  font-size: 0.8rem;
`;

const HeaderDetails = styled.div`
  display: flex;
  align-items: center;
  color: rgb(121, 117, 121);
`;
const Details = styled.div`
  padding-right: 0.6rem;
`;

const ChatMain = styled.div`
  padding: 0.7rem 0.7rem;
  overflow-y: scroll;
`;

const ChatInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;
