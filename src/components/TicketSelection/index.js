import Typography from "@material-ui/core/Typography";

import TicketInfoContext from "../../contexts/TicketInfoContext";
import { useContext } from "react";
import OptionMenu from "./OptionMenu";
import Confirmation from "./Confirmation";

export default function TicketSelection() {
  const { tickets, accomodations } = useContext(TicketInfoContext).ticketInfo;

  return (
    <>
      <Typography variant="h4">
        Ingresso e pagamento
      </Typography>
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
    </>
  );
}
