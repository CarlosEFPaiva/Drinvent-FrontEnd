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
  height: 100%;
  width: 100%;
  display: flex;
`;
