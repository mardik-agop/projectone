import React from "react";
import { View, StyleSheet } from "react-native";
import Footer from "../components/app/Footer";
import CharacterList from "../components/listScreen/CharacterList";
import Search from "../components/listScreen/Search";
import globals from "../styles/globals";

function List({ route }) {
  const listChoice = route.params;
  return (
    <View style={styles.mainContainer}>
      <Search props={listChoice} />
      <CharacterList props={listChoice} style={styles.list} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: globals.backgroundColor.mainBackground,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: globals.textColor.yellowGrey,
    fontSize: globals.fontSize.headerOne,
  },
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default List;
