import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { ButtonsWrapper } from "./ButtonsWrapper";
import OptionButton from "./Button";
import Button from "../Form/Button";

export default function TicketSelection() {
  return (
    <>
      <Typography variant="h4">
        Ingresso e pagamento
      </Typography>
      <StyledSubtitle variant="h6" color="neutral">
        Primeiro, escolha sua modalidade de ingresso
      </StyledSubtitle>
      <ButtonsWrapper>
        <OptionButton
          isActive
          title="Presencial"
          price={250}
        />
        <OptionButton
          title="Online"
          price={100}
        />
      </ButtonsWrapper>
      <StyledSubtitle variant="h6" color="neutral">
        Ótimo! Agora escolha sua modalidade de hospedagem
      </StyledSubtitle>
      <ButtonsWrapper>
        <OptionButton
          title="Sem Hotel"
          type="hotel"
          price={0}
        />
        <OptionButton
          isActive
          title="Com Hotel"
          type="hotel"
          price={350}
        />
      </ButtonsWrapper>
      <StyledSubtitle variant="h6" color="neutral">
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
