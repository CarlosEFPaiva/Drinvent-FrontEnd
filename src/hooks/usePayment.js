import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import UserContext from "../contexts/UserContext";
import useApi from "./useApi";

export default function usePayment() {
  const { payment } = useApi();
  const { setUserData } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  function confirmPayment() {
    setLoading(true);
    payment.confirmPayment().then((res) => {
      setLoading(false);
      setUserData((storedData) => {
        return ({ ...storedData, user: res.data });
      });
    })
      .catch((error) => {
        setLoading(false);
        toast.error("Não foi possivel entrar em contato com o servidor!");
      });
  }

  return {
    loading,
    confirmPayment
  };
}
