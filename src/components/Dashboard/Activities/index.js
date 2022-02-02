import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";
import useApi from "../../../hooks/useApi";
import Content from "./MainPage";
import { Modal } from "@material-ui/core";
import ModalContent from "./ModalContent";

export default function ActivitiesDashboard() {
  const { userData } = useContext(UserContext);
  const { talks } = useApi();
  const [text, setText] = useState("");
  const [allow, setAllow] = useState(false);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (userData.user.status.id !== 4) {
      setText("Você precisa ter confirmado pagamento antes de fazer a escolha de atividades");
    } else if (userData.user.ticket.id === 2) {
      setText("Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.");
    } else {
      setAllow(true);
    }
  }, []);

  function getActivites() {
    talks.getActivitiesByUserId().then((res) => {
      if (res.data.length === 0) {
        toast("Você não tem nenhum evento inscrito");
      } else {
        setContent(res.data);
        setOpen(true);
      }
    });
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <ActivitiesContainer>
      <Title>Escolha de atividades</Title>
      <Button onClick={getActivites}>Suas Atividades</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <ModalContent content={content} />
        </ModalContainer>
      </Modal>
      {allow ? <Content /> : <Text>{text}</Text>}
    </ActivitiesContainer>
  );
}

const ActivitiesContainer = styled.div`
  height: 90%;
  position: relative;
`;

const Text = styled.p`
  height: 100%;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: #8e8e8e;
`;

const Title = styled.p`
  font-size: 34px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 130px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .2);
  &:hover {
    filter: brightness(0.9);
  }
`;

const ModalContainer = styled.div`
  width: 80%;
  height: 90%;
  margin: auto;
  margin-top: 5%;
  background-color: lightgray;
  border-radius: 50px;
  padding: 40px;
  display: grid;
  gap: 10px;
`;
