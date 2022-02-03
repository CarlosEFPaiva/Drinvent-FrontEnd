import styled from "styled-components";

export default function ModalContent(props) {
  const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  
  return (
    props.content.map((talk, key) => {
      let rawdate = new Date(talk.event.date.name);
      let filteredDate = `${weekdays[rawdate.getDay()]} - ${rawdate.getDate()}/${rawdate.getMonth() + 1}`;

      return (
        <Container key={key}>
          <EventContainer>
            <Title>Evento:</Title>
            <p>{talk.event.name}</p>
          </EventContainer>
          <EventContainer>
            <Title>Início:</Title>
            <p> {talk.event.startTime} </p>
          </EventContainer>
          <EventContainer>
            <Title>Termino:</Title>
            <p>{talk.event.endTime}</p>
          </EventContainer>
          <EventContainer>
            <Title>Local:</Title>
            <p>{talk.event.locations.name}</p>
          </EventContainer>
          <EventContainer>
            <Title>Data:</Title>
            <p>{filteredDate}</p>
          </EventContainer>
        </Container>
      );
    })
  );
}

const Container = styled.div`
  font-size: 12px;
  color: #343434;
  background-color: #f5e6ab;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EventContainer = styled.div`
  display: grid;
  width: 20%;
  height: 90%;

  p {
    font-size: 20px;
    text-align: center;
    width: 100%;
  }
`;

const Title = styled.p`
  font-weight: 700;
`;
