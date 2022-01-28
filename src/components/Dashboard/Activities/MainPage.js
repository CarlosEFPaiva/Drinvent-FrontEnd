import styled from "styled-components";
import WeekDays from "./WeekDays";
import EventsDetails from "./EventsTable";
import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";

export default function Content() {
  const [dates, setDates] = useState([]);
  const { talks } = useApi();

  useEffect(() => {
    talks.getDates()
      .then((res) => {
        setDates(res.data);
      });
  }, []);

  return (
    <Container>
      <WeekDays dates={dates}/>
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
