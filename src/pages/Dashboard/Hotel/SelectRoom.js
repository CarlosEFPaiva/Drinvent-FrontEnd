import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import HotelOption from "./HotelOption";
import Rooms from "./Rooms";
import UnableMessage from "../../../components/UnableMessage";
import { useContext } from "react";
import RoomContext from "../../../contexts/RoomContext";
import UserContext from "../../../contexts/UserContext";
import useApi from "../../../hooks/useApi";

export default function SelectRoom(props) {
  const { userStatus, hotels, hotelSelected, setHotelSelected, selectedRoom, setSelectedRoom, previousRoomId, setPreviousRoomId, getUserInfo, setHasRoom, setLoading } = props;
  const { choosing, setChoosing } = useContext(RoomContext);
  const { backUser } = useContext(UserContext);
  const { saveRoom } = useApi();

  function save() {
    saveRoom.saveRoom(selectedRoom, backUser.id).then((res) => {
      alert("Quarto reservado");
      setChoosing(false);
      setHasRoom(false);
      getUserInfo();
    });
  };

  function cancel() {
    setLoading(true);
    setChoosing(false);
    setHasRoom(false);
  }

  return (
    < Container >
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {userStatus.allow ?
        <>
          <Subtitle>Primeiro, escolha seu hotel</Subtitle>
          <OptionsContainer>
            {hotels.map((h) => <HotelOption key={h.id} setHotelSelected={setHotelSelected} hotelSelected={hotelSelected} hotel={h} />)}
          </OptionsContainer>
          <Rooms hotelSelected={hotelSelected} hotels={hotels} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} previousRoomId={previousRoomId} setPreviousRoomId={setPreviousRoomId} />
          <ButtonDiv>
            <Button onClick={save}>RESERVAR QUARTO</Button>
            <Button chossing={choosing} onClick={cancel}>CANCELAR</Button>
          </ButtonDiv>
        </>
        : <UnableMessage width="500px">{userStatus.message}</UnableMessage>}
    </Container>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar { 
  display: none;
}
`;

const Subtitle = styled.div`
  color: #8E8E8E;
  font-size: 20px;
  margin-bottom: 20px;
`;

const OptionsContainer = styled.div`
  display: flex;
  width: 95%;
  height: auto;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 30px 0;
`;

const Button = styled.button`
  display: ${(props) => props.isSelected === "" ? "none" : "flex"};
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 50px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  margin: auto 0;
`;
