import { Page, Text, View, Image, Document, StyleSheet } from "@react-pdf/renderer";

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
    fontSize: "20px",
  },
  name: {
    fontWeight: "bold",
    fontSize: "32px",
    color: "#FA4098"
  },
  eventName: {
    fontWeight: "bold",
    fontSize: "32px",
    margin: "20px 0"
  },
  subTitle: {
    fontSize: "20px",
    padding: "0 80px",
    textAlign: "center",
  }
});

export default function CertificateFile({ username, modality }) {
  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <View style={styles.logoSection}>
          <Image src={drivent}></Image>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Certificamos que</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.name}>{username}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subTitle}>participou do evento</Text>
          <Text style={styles.eventName}>Driven.t</Text>
          <Text style={styles.subTitle}>com o objetivo de desenvolver habilidades em tecnologia através de experiências práticas, entre os dias 22 e 24 de Outubro de 2021, com carga horária total de 12 horas na modalidade {modality}.</Text>
        </View>
      </Page>
    </Document>
  );
}
