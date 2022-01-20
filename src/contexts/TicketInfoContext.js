import { useState, useEffect, createContext } from "react";

import Splash from "../components/Splash";

import useApi from "../hooks/useApi";

const TicketInfoContext = createContext();
export default TicketInfoContext;

export function TicketInfoProvider({ children }) {
  const [ticketInfo, setTicketInfo] = useState(null);
  const [error, setError] = useState(null);
  const api = useApi();

  useEffect(() => {
    api.event.getTicketsInfo().then(response => {
      setTicketInfo(response.data);
    }).catch(error => {
      /* eslint-disable-next-line no-console */
      console.error(error);
      setError(error);
    });
  }, []);

  if (!ticketInfo && !error) {
    return (
      <Splash loading />
    );
  }

  if (error) {
    let message = error.response ? error.response.data.message : "Could not connect to server. Please try again later.";
    return (
      <Splash message={message} />
    );
  }

  return (
    <TicketInfoContext.Provider value={{ ticketInfo, ticketInfoError: error }}>
      { children }
    </TicketInfoContext.Provider>
  );
}
