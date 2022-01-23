import { useContext, useEffect, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import useApi from "../../../hooks/useApi";
import styled from "styled-components";
import RoomContext from "../../../contexts/RoomContext";

export default function DetailsRoom(props) {
  const { setHasRoom, setLoading } = props;
  const { hotel } = useApi();
  const { backUser } = useContext(UserContext);
  const { setChoosing } = useContext(RoomContext);
  const [content, setContent] = useState("");

  useEffect(() => {
    hotel.getHotels().then((res) => {
      res.data.map((hotel) => {
        return hotel.rooms.map((room) => {
          if (room.id === backUser.rooms.id) {
            setContent(hotel);
          }
        });
      });
    });
  }, []);

  return (
    <Container>
      <Tittle>Escolha de quarto e Hotel</Tittle>
      <Subtittle>Você já escolheu seu quarto:</Subtittle>
      <ImageContainer>
        <Image src={content.imageUrl} alt="Hotel" />
        <HotelName>{content.name}</HotelName>
        <div>
          <HotelDescription>Quarto reservado:</HotelDescription>
          <HotelInfo>{backUser.rooms.number} ({backUser.rooms.type.name})</HotelInfo>
        </div>
        <div>
          <HotelDescription>Pessoas no seu quarto:</HotelDescription>
          <HotelInfo>{backUser.rooms.occupation === 1 ? "Somente você" : `Você e mais ${backUser.rooms.occupation - 1}`}</HotelInfo>
        </div>
      </ImageContainer>
      <Button onClick={() => {
        setChoosing(true);
        setHasRoom(false);
        setLoading(true);
      }}>
        Trocar de quarto
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  height: 90%;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const Tittle = styled.p`
  font-size: 34px;
  margin-top: 10px;
`;

const Subtittle = styled.p`
  margin: 40px 0 40px 0;
  font-size: 20px;
  color: #8E8E8E;
`;

const ImageContainer = styled.div`
  width: 25%;
  height: 50%;
  background-color: #FFEED2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;
`;

const HotelName = styled.p`
  font-size: 20px;
  margin-left: 10px;
`;

const HotelDescription = styled.p`
  font-weight: 700;
  font-size: 12px;
  margin:0 0 5px 10px;
`;

const HotelInfo = styled.p`
  font-size: 12px;
  margin-left: 10px;
`;

const Image = styled.img`
  border-radius: 5px;
  margin: 0 auto;
  height: 30%;
  width: 90%;
`;

const Button = styled.button`
  margin: 40px 0 0 0;
  width: 25%;
  height: 50px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 2px 10px grey ;
`;
