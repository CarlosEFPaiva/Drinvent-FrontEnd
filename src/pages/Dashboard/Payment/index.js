import TicketSelection from "../../../components/TicketSelection";
import { TicketInfoProvider } from "../../../contexts/TicketInfoContext";

export default function Payment() {
  return (
    <TicketInfoProvider>
      <TicketSelection />
    </TicketInfoProvider>
  );
}
