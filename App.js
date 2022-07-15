import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Text, View, Dimensions, Modal, Pressable, StyleSheet, useColorScheme
} from "react-native";
import Animated, {
  FlipInXUp
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default SendModal = ({ modalVisible, setModalVisible }) => {
  const colorScheme = useColorScheme();
  // Get my udpated balance
  return (
    <View style={styles.container}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.modalBk}>
          </View>
          <BlurView intensity={60} style={styles.blurView}></BlurView>
          <View
            style={[
              styles.centeredView,
              {
                backgroundColor:
                  colorScheme === "light"
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(0,0,0,0.35)",
              },
            ]}
          >
         <Animated.View
                entering={FlipInXUp.duration(500)}
                style={[
                  styles.modalView,
                  {
                    backgroundColor:
                      colorScheme === "light" ? "white" : "#121212",
                  },
                ]}
              >
                <View
                  style={{
                    backgroundColor: "transparent",
                    width: width - 96,
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: "6%",
                  }}
                ></View>
              </Animated.View>
            
          </View>
          <Pressable
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignContent: "center",
  },
  modalBk: {
    width: width,
    height: height,
    position: "absolute",
    top: 0,
    zIndex: -1,
    backgroundColor: "transparent",
  },
  gradient: {
    height: height,
    width: width,
    position: "absolute",
    bottom: 0,
    zIndex: 0,
    opacity: 0.6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sendCard: {
    backgroundColor: "transparent",
    marginTop: -80,
    shadowColor: "#777",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 0,
    borderColor: "rgba(150,150,150,0.6)",
  },
  avatarContainer: {
    overflow: "hidden",
    borderRadius: 32,
    backgroundColor: "transparent",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  value: {
    fontSize: 42,
    fontWeight: "300",
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
  buttonOpen: {
    backgroundColor: "transparent",
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
  modalText: {
    fontSize: 18,
    marginBottom: 0,
    textAlign: "center",
  },
  headerContainer: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
});
