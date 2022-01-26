import styled from "styled-components";

export default function EventInfos(props) {
  const { eventInfo } = props;

  return (
    <PlacesContainer>
      <텍스트>Teste</텍스트>
      <EventsContainer>
        <Button>{eventInfo.name}</Button>
      </EventsContainer>
    </PlacesContainer>
  );
}

const PlacesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const 텍스트 = styled.p`
  font-size: 17px;
  color: #7b7b7b;
  margin-bottom: 30px;
`;

const EventsContainer = styled.div`
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 90%;
  height: 100px;
  margin: 10px 0;
  border: none;
  background-color: #f1f1ff;
  border-radius: 5px;

  :hover{
    background-color: #d0d0d7;
  }
`;
