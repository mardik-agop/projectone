import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function BackgroundImage(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("List", { listName: "lotr" })}
    >
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/background/One_Ring_Blender_Render.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: "40%",
    height: "40%",
  },
});

export default BackgroundImage;
