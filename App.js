import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import Animated, { FlipInXUp, FlipOutXDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default SendModal = ({}) => {
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          colorScheme === "light"
            ? require("./assets/bg1.png")
            : require("./assets/bg8.png")
        }
        resizeMode="cover"
        style={styles.image}
      >
        <Pressable
          style={[
            styles.buttonClose,
            {
              backgroundColor: colorScheme === "light" ? "white" : "#121212",
            },
          ]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Open</Text>
        </Pressable>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <LinearGradient
            colors={
              colorScheme === "light"
                ? ["#FDB13F", "#DD544C", "#751F98"]
                : ["#751F98", "#300841", "#751F98"]
            }
            style={styles.gradient}
          />
          <View style={styles.modalBk}></View>
          <BlurView intensity={50} style={styles.blurView}></BlurView>
          <View
            style={[
              styles.centeredView,
              {
                backgroundColor:
                  colorScheme === "light"
                    ? "rgba(255,255,255,0)"
                    : "rgba(0,0,0,0.65)",
              },
            ]}
          >
            <Animated.View
              entering={FlipInXUp.duration(500)}
              exiting={FlipOutXDown.duration(500)}
              style={[
                styles.modalView,
                {
                  backgroundColor:
                    colorScheme === "light" ? "#FDB13F" : "#751F98",
                },
              ]}
            >
              {/* // Add content here */}
            </Animated.View>
          </View>
          <Pressable
            style={[
              styles.buttonClose,
              {
                backgroundColor: colorScheme === "light" ? "white" : "#121212",
              },
            ]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </Modal>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalBk: {
    width: width,
    height: height,
    position: "absolute",
    top: 0,
    zIndex: 1,
    backgroundColor: "transparent",
  },
  gradient: {
    height: height,
    width: width,
    position: "absolute",
    bottom: 0,
    zIndex: -1,
    opacity: 0.1,
  },
  centeredView: {
    height: height,
    width: width,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  blurView: {
    position: "absolute",
    top: 0,
    width: width,
    height: height,
  },
  modalView: {
    width: width - 48,
    minHeight: width,
    paddingTop: 24,
    borderRadius: 24,
    marginVertical: "33.3%",
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
  },
  button: {
    backgroundColor: "transparent",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    position: "absolute",
    bottom: 48,
    zIndex: 1,
    alignSelf: "center",
    paddingVertical: 12,
    backgroundColor: "rgba(255,255,255,0.5)",
    paddingHorizontal: 48,
    borderRadius: 99,
  },
  textStyle: {
    color: "grey",
    fontWeight: "bold",
    textAlign: "center",
  },
});
