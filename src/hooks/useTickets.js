import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import useApi from "./useApi";

export default function useTickets() {
  const [selectedTicket, setSelectedTicket] = useState({});
  const [selectedAccomodation, setSelectedAccomodation] = useState({});
  const [loading, setLoading] = useState(false);
  const { payment } = useApi();
  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    if (selectedTicket.name === "Online") {
      setSelectedAccomodation({});
    }
  }, [selectedTicket]);

  function submitReservation() {
    const requestBody = {
      ticketId: selectedTicket.id,
      accomodationId: selectedAccomodation.id || 1,
    };
    setLoading(true);
    payment.reserveTicket(requestBody).then((resp) => {
      setLoading(false);
      console.log(resp.data);
      setUserData((storedData) => {
        return ({ ...storedData, user: resp.data });
      });
    });
  }

  return {
    selectedTicket,
    setSelectedTicket,
    selectedAccomodation,
    setSelectedAccomodation,
    loading,
    submitReservation,
  };
}

