import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";
import TicketInfoContext from "../../contexts/TicketInfoContext";

import useTickets from "../../hooks/useTickets";

import OptionMenu from "./OptionMenu";
import Confirmation from "./Confirmation";
import UnableMessage from "../UnableMessage";
import ConfirmPayment from "../ConfirmPayment";
import BlankSpace from "../BlankSpace";

export default function TicketSelection() {
  const { tickets, accomodations } = useContext(TicketInfoContext).ticketInfo;
  const { user } = useContext(UserContext).userData;
  const {
    selectedTicket,
    setSelectedTicket,
    selectedAccomodation,
    setSelectedAccomodation,
    loading,
    submitReservation,
  } = useTickets();

  return (
    <>
      <BlankSpace
        isTransparent
        isLoading
        isShown={loading}
      />
      <Typography variant="h4">
        Ingresso e pagamento
      </Typography>
      <HidableWrapper isHidden={user.status.id !== 1}>
        <UnableMessage>
          Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
        </UnableMessage>
      </HidableWrapper>
      <HidableWrapper isHidden={user.status.id !== 2}>
        <OptionMenu
          title="Primeiro, escolha sua modalidade de ingresso"
          options={tickets}
          onClick={setSelectedTicket}
          selectedOption={selectedTicket}
          optionDescription="Ticket"
        />
        <OptionMenu
          isHidden={!selectedTicket.name || selectedTicket.name === "Online"}
          title="Ótimo! Agora escolha sua modalidade de hospedagem"
          options={accomodations}
          onClick={setSelectedAccomodation}
          selectedOption={selectedAccomodation}
          optionDescription="Accomodation"
        />
        <Confirmation
          isHidden={
            !selectedTicket.name ||
            (!selectedAccomodation.name && selectedTicket.name === "Presencial")
          }
          totalPrice={selectedTicket.price + (selectedAccomodation.price || 0)}
          onClick={submitReservation}
          loading={loading}
        />
      </HidableWrapper>
      {user.status.id>2 && 
        <HidableWrapper isHidden={user.status.id !== 3 && user.status.id !== 4}>
          <ConfirmPayment />
        </HidableWrapper>
      }
    </>
  );
}

const HidableWrapper = styled.div`
  display: ${({ isHidden }) => isHidden ? "none" : "block" };
`;
