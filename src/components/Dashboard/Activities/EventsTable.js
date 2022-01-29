import styled from "styled-components";
import EventInfos from "./Event";

export default function EventsDetails() {
  return (
    <EventsContainer>
      <EventInfos events={events} />
    </EventsContainer>
  );
}

const EventsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const events = [
  {
    name: "Pc gamer",
    startTime: "1000",
    endTime: "1100",
    location: "Auditório Principal"
  },
  {
    name: "Notebook",
    startTime: "1600",
    endTime: "1630",
    location: "Auditório Lateral"
  },
  {
    name: "Sla meo",
    startTime: "1700",
    endTime: "1900",
    location: "Sala de Workshop"
  },
];
