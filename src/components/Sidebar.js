import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

//Icons
import { PlusCircle } from "@styled-icons/boxicons-regular/PlusCircle";
import { Add } from "@styled-icons/material/Add";

// Data
import { sidebarItems } from "../data/SidebarData";

//Components
import AddChannelModal from "./AddChannelModal";

function Sidebar(props) {
  const [toggleModal, setToggleModal] = useState(false);

  const history = useHistory();

  const showModal = () => {
    setToggleModal(true);
  };

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  return (
    <Container>
      <WorkSpaceContainer>
        <Name>Clever Programmer</Name>
        <NewMessage>
          <PlusCircle size={30} />
        </NewMessage>
      </WorkSpaceContainer>

      <MainChannels>
        {sidebarItems.map((item) => (
          <MainChannelItem key={item.id}>
            {item.icon}
            {item.name}
          </MainChannelItem>
        ))}
      </MainChannels>

      <ChannelContainer>
        <NewChannelContainer>
          <div>Channel</div>
          <AddButton size={25} onClick={showModal} />
        </NewChannelContainer>
        <ChannelsList>
          {props.rooms.map((channel) => (
            <Channel
              onClick={() => {
                goToChannel(channel.id);
              }}
              key={channel.id}
            >
              # {channel.name}
            </Channel>
          ))}
        </ChannelsList>
      </ChannelContainer>
      <AddChannelModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkSpaceContainer = styled.div`
  color: white;
  height: 5rem;
  /* background: lightblue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.2rem;
  padding-right: 1.8rem;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3f0e40;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 1.4rem;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  align-items: center;
  padding-left: 1.2rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  cursor: pointer;

  &:hover {
    background: #350d36;
  }
`;

const ChannelContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 1rem;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
  padding-left: 1.2rem;
  padding-right: 1rem;
`;

const AddButton = styled(Add)`
  cursor: pointer;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  padding-left: 1.2rem;
  cursor: pointer;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  &:hover {
    background: #350d36;
  }
`;
