// import libraries to create components
import React from "react";
import { Text, StyleSheet } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";
import { View } from "react-native-web";
import AboutComponent from "./src/screens/AboutComponent";

// create component that returns some jsx
const App = () => {
  const ele = <text> Hii Amit</text>;
  return (
    <View>
      <AboutComponent />
      {/* <Text style={styles.textStyle}>Hello World !! This is my App.js</Text>
      <CustomComponent />
      {ele} */}
    </View>
  );
};

// create a stylesheet to style the component
const styles = StyleSheet.create({
  // Here we can create as many classes as we want
  textStyle: {
    color: "red",
  },
});

// export the file , so that we can use it any other place
export default App;

// View Component -> div
// setx /M REACT_NATIVE_PACKAGER_HOSTNAME 192.168.83.23
