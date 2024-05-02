import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


export function ModalAluno({ route }) {
  const { userData } = route.params;
  const {
    cep,
    cidade,
    dataNascimento,
    email,
    estado,
    foto,
    genero,
    id,
    nacionalidade,
    nome,
    pais,
    telefone
  } = userData;

  return (
    <View style={styles.container}>
      <Image source={{ uri: foto }} style={styles.userImage} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Detalhes do Aluno</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>{nome}</Text>
            <Text style={styles.userInfoText}>{email}</Text>
            <Text style={styles.userInfoText}>{genero}</Text>
            <Text style={styles.userInfoText}>{dataNascimento}</Text>
            <Text style={styles.userInfoText}>{telefone}</Text>
            <Text style={styles.userInfoText}>{nacionalidade}</Text>
            <Text style={styles.userInfoText}>
              {cidade}, {estado}, {pais} - {cep}
            </Text>
            <Text style={styles.userInfoText}>{id}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: "30%",
    backgroundColor: "#45acd0",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
    position: "absolute",
    top: 180,
    alignSelf: "center",
    zIndex: 2,
  },
  userInfoContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  userInfo: {
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "flex-start",
    zIndex: 0,
  },
  userInfoText: {
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
