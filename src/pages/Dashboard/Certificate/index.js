import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";

import UserContext from "../../../contexts/UserContext";
import UnableMessage from "../../../components/UnableMessage";
import CertificateFile from "../../../components/Dashboard/Certificate/CertificateFile";

import useApi from "../../../hooks/useApi";

export default function Certificate() {
  const { userData } = useContext(UserContext);
  const { enrollment } = useApi();
  const [username, setUsername] = useState(null);

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
      <>
        <Message>Agradecemos sua participação no evento! Clique no seu certificado para fazer o download.</Message>
        <CertificateContainer>
          <PDFDownloadLink
            document={<CertificateFile username={username} modality={userData.user.ticket.name}/>}
            fileName="certificado_drivent.pdf"
            style={styles.button}
            children={
              <CertificateImage>
                <CertificateFile username={username} modality={userData.user.ticket.name}/>
              </CertificateImage>
            }
          />
        </CertificateContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: { 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textDecoration: "none"
  }
});

const CertificateContainer = styled.div`
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);
  border-radius: 15px 0;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CertificateImage = styled.div`
  height: 100%;
  width: 100%;
  border: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #FFD780, #FA4098);
`;

const Title = styled.p`
  font-size: 34px;
  margin-bottom: 24px;
`;

const Message = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #8E8E8E;
`;
