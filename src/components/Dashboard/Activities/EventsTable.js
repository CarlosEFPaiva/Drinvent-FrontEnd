import { useContext } from "react";
import styled from "styled-components";
import ActivitiesInfoContext from "../../../contexts/ActivitiesInfoContext";
import EventInfos from "./Event";

export default function EventsDetails() {
  const { selectedDate, hideActivities, activities } = useContext(ActivitiesInfoContext);
  return (
    <EventsContainer>
      {
        !hideActivities ? 
          activities.map(({ locationName, events }, index) => {
            return (
              <EventInfos key={"EventInfo" + selectedDate.name + index} title={ locationName } events={events} />
            );
          }) :
          ""
      }
    </EventsContainer>
  );
}

const EventsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
