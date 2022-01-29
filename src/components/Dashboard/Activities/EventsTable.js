import { useContext } from "react";
import styled from "styled-components";
import ActivitiesInfoContext from "../../../contexts/ActivitiesInfoContext";
import EventInfos from "./Event";

export default function EventsDetails() {
  const { activities } = useContext(ActivitiesInfoContext);
  return (
    <EventsContainer>
      {
        activities.map(({ locationName, events }, key) => {
          return (
            <EventInfos key={key} title={ locationName } events={events} />
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
