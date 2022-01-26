import styled from "styled-components";
import EventInfos from "./Event";

export default function EventsDetails() {
  return (
    <EventsContainer>
      {
        events.map((eventInfo, key) => {
          return (
            <EventInfos key={key} eventInfo={eventInfo} />
          );
        })
      }
    </EventsContainer>
  );
}

const EventsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const events = [
  {
    name: "Pc gamer",
    startTime: "1000",
    endTime: "1500"
  },
  {
    name: "Notebook",
    startTime: "1600",
    endTime: "1630"
  },
  {
    name: "Sla meo",
    startTime: "1700",
    endTime: "1900"
  },
];
