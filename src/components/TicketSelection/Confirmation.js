import styled from "styled-components";
import { Typography } from "@material-ui/core";

import Button from "../Form/Button";

export default function Confirmation() {
  return (
    <>
      <StyledSubtitle variant="h6">
            Fechado! O total ficou em <b>R$ 250</b>. Agora é só confirmar:
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
