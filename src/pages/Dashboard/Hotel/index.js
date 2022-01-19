import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import styled from "styled-components";
import HotelOption from "./HotelOption";
import Room from "./Room";

export default function Hotel() {
  const [hotelSelected, setHotelSelected] = useState("");
  const [roomSelected, setRoomSelected] = useState("");

  return(
    <Container>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <Subtitle>Primeiro, escolha seu hotel</Subtitle>
      <OptionsContainer>
        {hoteis.map((h) => <HotelOption setHotelSelected={setHotelSelected} hotelSelected={hotelSelected} id={h.id}/> )}
      </OptionsContainer>
      <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
      <OptionsContainer>
        {quartos.map((room) => <Room roomSelected={roomSelected} setRoomSelected={setRoomSelected} id={room.id}/>)}
      </OptionsContainer>
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

const hoteis = [{ id: 1 }, { id: 2 }, { id: 3 }];
const quartos = [{ id: 1,  }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
