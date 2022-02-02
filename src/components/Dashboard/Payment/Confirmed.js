import { useContext } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";

export default function Confirmed() {
  const { user } = useContext(UserContext).userData;
  const conditionedText = [
    { condition: user.ticket.id === 2, text: "Aproveite o evento!" },
    { condition: user.accomodation.id === 2, text: "Prossiga para escolha de hospedagem e atividades" },
    { condition: user.accomodation.id === 1, text: "Prossiga para escolha atividades" },
  ];

  const text = conditionedText.find(({ condition }) => condition === true).text;

  return (
    <Content>
      <CheckIcon/>
      <Text>
        <h1>Pagamento Confirmado!</h1>
        <h2>{text}</h2>
      </Text>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
`;

const CheckIcon = styled(BsFillCheckCircleFill)`
  color: #36B853;
  font-size: 40px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  font-size: 16px;
  line-height: 20px;
  color: #454545;

  h1{
    font-weight: bold;
  }
`;
