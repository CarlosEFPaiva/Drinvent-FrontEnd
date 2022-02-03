import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import drivent from "../../../assets/images/drivent.png";

const styles = StyleSheet.create({
  document: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "98%",
    width: "99%",
    padding: "10px"
  },
  logoSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FA4098",
    width: "100%",
    height: "110px"
  },
  logoTitle: {
    fontSize: "30px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    padding: 10,
    color: "#000",
  },
  title: {
    fontWeight: "bold",
    fontSize: "32px",
    marginTop: "50px",
    color: "#FA4098"
  },
  subTitle: {
    fontSize: "20px",
    padding: "0 80px",
    textAlign: "center",
    marginTop: "40px"
  }
});

export default function CertificateFile({ username, modality }) {
  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <View style={styles.logoSection}>
          <Text style={styles.logoTitle}><img src={drivent} alt="logo" /></Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>CERTIFICADO</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subTitle}>Certificamos que <strong>{username}</strong> participou do evento <strong>Driven.t</strong> com o objetivo de desenvolver habilidades em tecnologia através de experiências práticas, entre os dias <strong>22 e 24 de Outubro de 2021</strong>, com <strong>carga horária</strong> total de <strong>12 horas</strong> na modalidade <strong>{modality}</strong>.</Text>
        </View>
      </Page>
    </Document>
  );
}
