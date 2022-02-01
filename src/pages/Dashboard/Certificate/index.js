import styled from "styled-components";
import { useContext } from "react";

import UserContext from "../../../contexts/UserContext";

import drivent from "../../../assets/images/drivent.png";

export default function Certificate() {
  const { userData } = useContext(UserContext);
  
  return (
    <Box>
      <Header>
        <img src={drivent} alt="drivent"/>
      </Header>
      <Content>
        <h1>CERTIFICADO</h1>
        <p>
          Certificamos que <strong>aluno</strong> participou do evento <strong>Driven.t</strong> com o objetivo de desenvolver habilidades em tecnologia através de experiências práticas, entre os dias <strong>22 de Novembro e 3 de dezembro de 2021</strong>, com <strong>carga horária</strong> total de <strong>100 horas</strong> na modalidade <strong>presencial</strong>.
        </p>
      </Content>
    </Box>
  );
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

