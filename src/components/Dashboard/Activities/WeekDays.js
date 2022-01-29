import styled from "styled-components";

export default function WeekDays({ dates }) {
  const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  return (
    <DaysContainer>
      {
        dates.map((day, key) => {
          let date = new Date(day.name);
          let DATE = `${weekdays[date.getDay()]} - ${date.getDate()}/${date.getMonth()}`;
          return <Button key={key}>{DATE}</Button>;
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
  margin-right: 17px;
  height: 40px;
  width: 130px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .2);
`;

