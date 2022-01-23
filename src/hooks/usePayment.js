import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import useApi from "./useApi";

export default function usePayment() {
  const { payment } = useApi();
  const { setUserData } = useContext(UserContext);

  function confirmPayment() {
    payment.confirmPayment().then((res) => {
      setUserData((storedData) => {
        return ({ ...storedData, user: res.data });
      });
    });
  }

  return {
    confirmPayment
  };
}
