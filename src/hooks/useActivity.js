import { useState } from "react";
import useApi from "./useApi";
import { toast } from "react-toastify";

export default function useActivity({ event, setLoading }) {
  const [isSubscribed, setIsSubscribed] = useState(event.isUserSubscribed);
  const [isClicked, setIsClicked] = useState(false);
  const { talks } = useApi();

  function attemptSubscription() {
    setLoading(true);
    talks.subscribe(event.id)
      .then(() => {
        setIsSubscribed(true);
        setLoading(false);
        setIsClicked(false);
        return toast("Inscrição feita com sucesso!");
      })
      .catch((error) => {
        setLoading(false);
        setIsClicked(false);
        if (error.response.status === 422) {
          return toast.error("Oh não! Parece que acabaram de pegar as últimas vagas :/ Por favor, atualize a página");
        }
        if (error.response.status === 409) {
          return toast.error("Parece que você já está inscrito em outra atividade neste horário!");
        }
        return toast.error("Parece que houve um erro no contato com o servidor! Por favor, tente mais tarde");
      });
  }

  function attemptUnsubscription() {
    setLoading(true);
    talks.unsubscribe(event.id)
      .then(() => {
        setIsSubscribed(false);
        setLoading(false);
        setIsClicked(false);
        return toast("Desinscrição feita com sucesso!");
      })
      .catch(() => {
        setLoading(false);
        setIsClicked(false);
        return toast.error("Parece que houve um erro no contato com o servidor! Por favor, tente mais tarde");
      });
  }

  function activityOnClick() {
    setIsClicked(true);
    if (!isSubscribed) {
      return attemptSubscription();
    }
    return attemptUnsubscription();
  }

  return {
    isSubscribed,
    isClicked,
    setIsClicked,
    activityOnClick,
  };
}
