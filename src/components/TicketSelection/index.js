import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { ButtonsWrapper } from "./ButtonsWrapper";
import OptionButton from "./Button";
import Button from "../Form/Button";
import TicketInfoContext from "../../contexts/TicketInfoContext";
import { useContext } from "react";

export default function TicketSelection() {
  const { tickets, accomodations } = useContext(TicketInfoContext).ticketInfo;

  return (
    <>
      <Typography variant="h4">
        Ingresso e pagamento
      </Typography>
      <StyledSubtitle variant="h6">
        Primeiro, escolha sua modalidade de ingresso
      </StyledSubtitle>
      <ButtonsWrapper>
        {tickets.map(({ id, name, price }) => (
          <OptionButton
            key={`Ticket Option ${id}`}
            isActive={id === 1}
            title={name}
            price={Number(price)}
          />
        ))}
      </ButtonsWrapper>
      <StyledSubtitle variant="h6">
        Ótimo! Agora escolha sua modalidade de hospedagem
      </StyledSubtitle>
      <ButtonsWrapper>
        {accomodations.map(({ id, name, price }) => (
          <OptionButton
            key={`Ticket Option ${id}`}
            isActive={id === 2}
            title={name}
            price={Number(price)}
          />
        ))}
      </ButtonsWrapper>
      <StyledSubtitle variant="h6">
        Fechado! O total ficou em <b>R$ 600</b>. Agora é só confirmar:
      </StyledSubtitle>
      <Button>
        Reservar ingresso
      </Button>
    </>
  );
}

const StyledSubtitle = styled(Typography)`
  margin: 24px 0px 12px !important;
  color: #8E8E8E;
  & b {
    font-weight: 700;
  }
`;
