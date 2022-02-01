import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

import UserContext from "../../../contexts/UserContext";
import UnableMessage from "../../../components/UnableMessage";

import drivent from "../../../assets/images/drivent.png";
import useApi from "../../../hooks/useApi";

export default function CertificateDashboard() {
  const { userData } = useContext(UserContext);
  const { enrollment } = useApi();
  const [username, setUsername] = useState  (null);

  useEffect(() => {
    enrollment.getPersonalInformations().then(response => {
      if (response.status !== 200) {
        return;
      }
      const { name } = response.data;
      setUsername(name);
    });
  }, []);

  if (userData.user.status.id !== 4) {
    return (
      <>
        <Title>Certificado</Title>
        <UnableMessage>
          Você precisa ter confirmado o pagamento antes de visualizar seus certificados
        </UnableMessage>
      </>
    );
  }

  else {
    return (
      <Box>
        <Header>
          <img src={drivent} alt="drivent"/>
        </Header>
        <Content>
          <h1>CERTIFICADO</h1>
          <p>
            Certificamos que <strong>{username}</strong> participou do evento <strong>Driven.t</strong> com o objetivo de desenvolver habilidades em tecnologia através de experiências práticas, entre os dias <strong>22 e 24 de Outubro de 2021</strong>, com <strong>carga horária</strong> total de <strong>12 horas</strong> na modalidade <strong>{userData.user.ticket.name}</strong>.
          </p>
        </Content>
      </Box>
    );
  }
}

const Box = styled.div`
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);
  border-radius: 15px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  border-radius: 15px 0 0;
  height: 100px;
  width: 100%;
  background-color: #FA4098;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    height: 30px;
  }
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  
  h1{
    font-size: 35px;
    color: #FA4098;
    font-weight: bold;
    margin-top: 80px;
  }

  p{
    margin-top: 30px;
    line-height: 25px;
    letter-spacing: 2px;
    text-align: center;
    font-size: 20px;
  }
`;

const Title = styled.p`
  font-size: 34px;
  margin-bottom: 24px;
`;
