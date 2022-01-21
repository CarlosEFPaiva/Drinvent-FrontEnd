import styled from "styled-components";

import Confirmed from "./Dashboard/Payment/Confirmed";
import CreditCardForm from "./Dashboard/Payment/CreditCardForm";

export default function ConfirmPayment() {
  return (
    <>
      <Subtitle>Ingresso escolhido</Subtitle>
      <Card>
        <h3>asdasdasdasd</h3>
        <p>sda</p>
      </Card>
      <Subtitle>Pagamento</Subtitle>
      <Confirmed />
    </>
  );
}

const Subtitle = styled.h2`
  font-size: 20px;
  color: #8E8E8E;
  margin-bottom: 17px;
`;

const Card = styled.div`
  width: 290px;
  height: 108px;
  background: #FFEED2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  h3 {
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }

  p {
    font-size: 14px;
    line-height: 16px;
    color: #898989;
  }
`;
