import styled from "styled-components";
import { Typography } from "@material-ui/core";

import Button from "../Form/Button";

export default function Confirmation({ isHidden, totalPrice, onClick, loading }) {
  return (
    <HidableWrapper isHidden={isHidden}>
      <StyledSubtitle variant="h6">
        Fechado! O total ficou em <b>R$ {totalPrice}</b>. Agora é só confirmar:
      </StyledSubtitle>
      <Button onClick={onClick} disabled={loading}>
            Reservar ingresso
      </Button>
    </HidableWrapper>
  );
}

const StyledSubtitle = styled(Typography)`
  margin: 24px 0px 12px !important;
  color: #8E8E8E;
  & b {
    font-weight: 700;
  }
`;

const HidableWrapper = styled.div`
  display: ${({ isHidden }) => isHidden ? "none" : "block" };
`;
