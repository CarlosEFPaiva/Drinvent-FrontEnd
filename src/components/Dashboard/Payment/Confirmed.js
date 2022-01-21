import { BsFillCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";

export default function Confirmed() {
  return (
    <Content>
      <CheckIcon/>
      <Text>
        <h1>Pagamento Confirmado!</h1>
        <h2>Prossiga para escolha de hospedagem e atividades</h2>
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
