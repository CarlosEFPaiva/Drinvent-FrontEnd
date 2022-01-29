import styled from "styled-components";

export default function EventInfos({ title, events }) {
  return (
    <PlacesContainer>
      <Title>{title}</Title>
      <EventsContainer>
        {
          events.map(({ name }, key) => (
            <Button key={key}>{name}</Button>
          ))
        }
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

const Title = styled.p`
  font-size: 17px;
  color: #7b7b7b;
  margin-bottom: 30px;
`;

const EventsContainer = styled.div`
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
`;

const Button = styled.button`
  width: 90%;
  height: 100px;
  margin: 10px 0;
  border: none;
  cursor: pointer;
  background-color: #f1f1ff;
  border-radius: 5px;

  :hover{
    background-color: #d0d0d7;
  }
`;
