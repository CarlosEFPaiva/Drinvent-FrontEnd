import Typography from "@material-ui/core/Typography";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";
import HotelOption from "./HotelOption";
import Room from "./Room";
import useApi from "../../../hooks/useApi";
import UnableMessage from "../../../components/UnableMessage";
import Splash from "../../../components/Splash";

export default function Hotel() {
  const [hotelSelected, setHotelSelected] = useState("");
  const [roomSelected, setRoomSelected] = useState("");
  const [userStatus, setUserStatus] = useState({ allow: false, message: "" });
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData } = useContext(UserContext);
  const { hotel } = useApi();

  useEffect(() => {
    if(userData.user.status.id === 4 && userData.user.ticket.id === 1) {
      hotel.getHotels().then(resp => {
        setLoading(false);
        if(resp.data.length === 0) {
          setUserStatus({ ...userStatus, message: "Não há hoteis diponiveis" });
        }
        else{
          setHotels(resp.data);
          setUserStatus({ ...userStatus, allow: true });
        }
      });
    } else if (userData.user.status.id <= 3) {
      setLoading(false);
      setUserStatus({ ...userStatus, message: "Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem" });
    }
    else {
      setLoading(false);
      setUserStatus({ ...userStatus, message: "Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades" });
    }
  }, []);

  if (loading) {
    return (
      <Splash
        loading
        hidePicture
        minHeight="0px"
        background="#FFF"
        loaderColor="#000"
      />
    );
  }

  return(
    <Container>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {userStatus.allow ?
        <>
          <Subtitle>Primeiro, escolha seu hotel</Subtitle>
          <OptionsContainer>
            {hotels.map((h) => <HotelOption key={h.id} setHotelSelected={setHotelSelected} hotelSelected={hotelSelected} hotel={h}/> )}
          </OptionsContainer>
          <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
          <OptionsContainer>
            {/* {quartos.map((room) => <Room key={room.id} roomSelected={roomSelected} setRoomSelected={setRoomSelected} id={room.id}/>)} */}
          </OptionsContainer>
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

//render rooms

