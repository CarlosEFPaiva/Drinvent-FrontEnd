import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import styled from "styled-components";
import HotelOption from "./HotelOption";
import Room from "./Room";

export default function Hotel() {
  const [deselects, setDeselects] = useState("");
  return(
    <Container>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <Subtitle>Primeiro, escolha seu hotel</Subtitle>
      <OptionsContainer>
        {hoteis.map((h) => <HotelOption setDeselects={setDeselects} deselects={deselects} id={h.id}/> )}
      </OptionsContainer>
      <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
      <OptionsContainer>
        {quartos.map((room) => <Room />)}
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
const quartos = [1, 2, 3, 4, 5, 6];
