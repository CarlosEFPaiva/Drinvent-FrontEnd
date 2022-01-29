import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";
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
      {allow ? <Content /> : <Text>{text}</Text>}
    </ActivitiesContainer>
  );
}

const ActivitiesContainer = styled.div`
  height: 90%;
`;

const Text = styled.p`
  height: 100%;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: #8e8e8e;
`;

const Title = styled.p`
  font-size: 34px;
  margin-bottom: 24px;
`;
