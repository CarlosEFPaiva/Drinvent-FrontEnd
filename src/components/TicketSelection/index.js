import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";
import TicketInfoContext from "../../contexts/TicketInfoContext";

import OptionMenu from "./OptionMenu";
import Confirmation from "./Confirmation";
import UnableMessage from "../UnableMessage";
import ConfirmPayment from "../ConfirmPayment";

export default function TicketSelection() {
  const { tickets, accomodations } = useContext(TicketInfoContext).ticketInfo;
  const { user } = useContext(UserContext).userData;
  console.log(user);

  return (
    <>
      <Typography variant="h4">
        Ingresso e pagamento
      </Typography>
      <HidableWrapper isHidden={user.status.id !== 1}>
        <UnableMessage>
          Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
        </UnableMessage>
      </HidableWrapper>
      <HidableWrapper isHidden={user.status.id !== 3}>
        <OptionMenu
          title="Primeiro, escolha sua modalidade de ingresso"
          options={tickets}
          optionDescription="Ticket"
        />
        <OptionMenu
          title="Ótimo! Agora escolha sua modalidade de hospedagem"
          options={accomodations}
          optionDescription="Accomodation"
        />
        <Confirmation />
      </HidableWrapper>
      <HidableWrapper isHidden={user.status.id !== 2}>
        <ConfirmPayment />
      </HidableWrapper>
    </>
  );
}

const HidableWrapper = styled.div`
  display: ${({ isHidden }) => isHidden ? "none" : "block" };
`;
