import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";
import Content from "./MainPage";

export default function AktivitätenDashboard() {
  const { userData } = useContext(UserContext);
  const [judul, setJudul] = useState("");
  const [許可する, set許可する] = useState(false);

  useEffect(() => {
    if(userData.user.status.id !== 4) {
      setJudul("Você precisa ter confirmado pagamento antes de fazer a escolha de atividades");
    } else if(userData.user.accomodation.id === 1) {
      setJudul("Você precisa ter confirmado pagamento antes de fazer a escolha de atividades");
    } else {
      set許可する(true);
    }
  }, []);

  return (
    <AktivitätenContainer>
      <텍스트>Escolha de atividades</텍스트>
      {許可する ? <Content /> : <Judul>{judul}</Judul>}
    </AktivitätenContainer>
  );
}

const AktivitätenContainer = styled.div`
  height: 90%;
`;

const Judul = styled.p`
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

const 텍스트 = styled.p`
  font-size: 34px;
`;
