import { useContext } from "react";
import styled from "styled-components";
import ActivitiesInfoContext from "../../../contexts/ActivitiesInfoContext";

export default function WeekDays() {
  const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const { dates, selectedDate, setSelectedDate } = useContext(ActivitiesInfoContext);

  return (
    <DaysContainer>
      {
        dates.map((day, key) => {
          let rawdate = new Date(day.name);
          let filteredDate = `${weekdays[rawdate.getDay()]} - ${rawdate.getDate()}/${rawdate.getMonth() + 1}`;
          return (
            <Button
              key={"dateButton" + key}
              onClick={() => setSelectedDate(day)}
              isSelected={day.id === selectedDate?.id}
            >
              {filteredDate}
            </Button>);
        })
      }
    </DaysContainer>
  );
}

const DaysContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Button = styled.button`
  margin-right: 10px;
  height: 40px;
  width: 130px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ isSelected }) => isSelected ? "#FFD37D" : ""};
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .2);
  &:hover {
    filter: brightness(0.9);
  }
`;

