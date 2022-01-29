import styled from "styled-components";
import WeekDays from "./WeekDays";
import EventsDetails from "./EventsTable";
import { Typography } from "@material-ui/core";
import { useContext } from "react";
import ActivitiesInfoContext from "../../../contexts/ActivitiesInfoContext";

export default function Content() {
  const { activities } = useContext(ActivitiesInfoContext);
  return (
    <Container>
      {
        activities ?
          "" :
          <StyledSubtitle variant="h6">
            Primeiro, filtre pelo dia do evento:
          </StyledSubtitle>
      }
      <WeekDays />
      {activities ? <EventsDetails /> : ""}
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

const StyledSubtitle = styled(Typography)`
  width: 100%;
  margin: 0px 0px 20px !important;
  font-weight:400 !important;
  color: #8E8E8E;
  & b {
    font-weight: 700;
  }
`;
