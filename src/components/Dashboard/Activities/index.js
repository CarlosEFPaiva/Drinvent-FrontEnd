import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";
import UnableMessage from "../../UnableMessage";
import Content from "./MainPage";

export default function ActivitiesDashboard() {
  const { userData } = useContext(UserContext);
  const [text, setText] = useState("");
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    if(userData.user.status.id !== 4) {
      setText("Você precisa ter confirmado pagamento antes de fazer a escolha de atividades");
    } else if(userData.user.ticket.id === 2) {
      setText("Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.");
    } else {
      setAllow(true);
    }
  }, []);

  return (
    <ActivitiesContainer>
      <Title>Escolha de atividades</Title>
      {allow ? <Content /> : <UnableMessage>{text}</UnableMessage>}
    </ActivitiesContainer>
  );
}

const ActivitiesContainer = styled.div`
  height: 90%;
`;

const Title = styled.p`
  font-size: 34px;
  margin-bottom: 24px;
`;
