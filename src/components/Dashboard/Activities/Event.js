import styled from "styled-components";
import ActivityBox from "./ActivityBox";

export default function EventInfos({ title, events }) {
  return (
    <>
      <Box>
        <PlacesContainer>
          <Title>{title}</Title>
          <EventsContainer>
            {events.map((event) => (
              <ActivityBox
                event={event}
                key={event.id}
              />
            ))}         
          </EventsContainer>
        </PlacesContainer>
      </Box>
    </>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
`;

const PlacesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-size: 17px;
  color: #7b7b7b;
  margin-bottom: 15px;
`;

const EventsContainer = styled.div`
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 395px;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  row-gap: 10px;
  padding: 15px;
`;
