import styled from "styled-components";

export default function WeekDays() {
  return (
    <DaysContainer>
      {
        days.map((day, key) => {
          return <Button key={key}>{day}</Button>;
        })
      }
    </DaysContainer>
  );
}

const DaysContainer = styled.div`
  width: 100%;
  margin: 40px 0;
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
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .2);
`;

const days = ["Sexta, 22/10", "Sábado, 23/10", "Domingo, 24/10"];
