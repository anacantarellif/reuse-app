import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BannerCard from "../../components/BannerCard";
import Header from "../../components/Header";
import { Dimensions } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Componente 1 - Header */}
      <Header />

      {/* Componente 2 - Banner reutilizável */}
      <BannerCard />

      {/* Proposta de valor */}
      <Text style={styles.title}>
        Dê uma nova vida aos objetos que você não usa mais,
        encontrando produtos reutilizáveis.
      </Text>

      {/* Explicação do problema */}
      <Text style={styles.text}>
        Milhares de produtos em bom estado são descartados todos os dias.
      </Text>

      <Text style={styles.text}>
        O ReUse conecta pessoas para reutilizar e reduzir desperdício.
      </Text>

      <View style={styles.buttonArea}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Em breve...</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 18,
    backgroundColor: "#F7F9F5",
  },

  /* Título grande (protótipo) */
  title: {
    fontSize: 26,
    fontWeight: "800",
    lineHeight: 34,
    marginTop: 32,     // espaço entre banner e título
    marginBottom: 20,  // espaço até o primeiro texto menor
    color: "#273D3A",
  },

  /* Textos menores (protótipo) */
  text: {
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 10,
    color: "#273D3A",
  },

  /* Wrapper do botão: empurra pra baixo */
  buttonArea: {
    marginTop: "auto",
    paddingBottom: 24,
  },

  /* Botão cinza */
  button: {
    backgroundColor: "#D6D6D6",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
});

