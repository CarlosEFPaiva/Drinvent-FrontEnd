import styled from "styled-components";
import WeekDays from "./WeekDays";
import EventsDetails from "./EventsTable";

export default function Content() {
  return (
    <Container>
      <WeekDays />
      <EventsDetails />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
