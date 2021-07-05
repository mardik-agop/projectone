import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
import { emptyError } from "../components/errorMessages";
import globals from "../styles/globals";
import Axios from "axios";

const RegisterScreen = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [responseName, setResponseName] = useState("");
  const [responseLastName, setResponseLastName] = useState("");
  const [responseEmail, setResponseEmail] = useState("");
  const [responseError, setResponseError] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const clearName = useRef();
  const clearLastName = useRef();
  const clearEmail = useRef();

  const sendUserData = () => {
    setResponseError("");
    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
      },
    })
      .then((response) => {
        if (!userFirstName || !userLastName || !userEmail) {
          setResponseError(emptyError);
          return;
        } else {
          setModalVisible(true);
          setResponseName(response.data.body.firstName);
          setResponseLastName(response.data.body.lastName);
          setResponseEmail(response.data.body.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    clearName.current.clear();
    clearLastName.current.clear();
    clearEmail.current.clear();
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>First Name</Text>
      <TextInput
        ref={clearName}
        autoCompleteType="name"
        onChangeText={(userFirstName) => setUserFirstName(userFirstName)}
        style={styles.input}
      ></TextInput>
      <Text style={styles.text}>Last Name</Text>
      <TextInput
        ref={clearLastName}
        autoCompleteType="name"
        onChangeText={(userLastName) => setUserLastName(userLastName)}
        style={styles.input}
      ></TextInput>
      <Text style={styles.text}>Email</Text>
      <Text style={globals.errorMessage.style}>{responseError}</Text>
      <TextInput
        ref={clearEmail}
        autoCompleteType="email"
        onChangeText={(userEmail) => setUserEmail(userEmail)}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity onPress={sendUserData}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Name: {responseName + " " + responseLastName}</Text>
              <Text>Email: {responseEmail}</Text>
              <Text style={styles.modalText}>
                Thank you for your interest {responseName}! We look forward to
                hearing from you again!
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Back</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globals.backgroundColor.mainBackground,
  },
  text: {
    color: globals.textColor.yellowGrey,
    fontSize: globals.fontSize.headerTwo,
  },
  input: {
    width: "80%",
    fontSize: 18,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: globals.textColor.yellowGrey,
    padding: 5,
    color: globals.textColor.yellowGrey,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});