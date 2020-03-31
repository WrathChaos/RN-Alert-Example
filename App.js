/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  View,
  Text,
  Alert,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity
          style={{
            height: 45,
            width: 150,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#379127"
          }}
          onPress={() => {
            Alert.alert(
              // ? Title
              "Title",
              // ? Body
              `Boooddyyy`,
              [
                {
                  text: "Accept",
                  onPress: () => {}
                },
                {
                  text: "Cancel",
                  onPress: () => {},
                  style: "cancel"
                }
              ],
              { cancelable: false }
            );
          }}
        >
          <Text style={{ textAlign: "center", color: "#fdfdfd" }}>
            Alert Button!
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;
