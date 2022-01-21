import styled from "styled-components";

import ConfirmPayment from "../../../components/ConfirmPayment";

export default function Payment() {
  return (
    <>
      <Title>Ingresso e Pagamento</Title>
      <ConfirmPayment />
    </>
  );
}

const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 37px;
`;
