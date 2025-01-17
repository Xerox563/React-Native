// import libraries to create components
import React from "react";
import { Text, StyleSheet } from "react-native";

// create component that returns some jsx
const CustomComponent = () => {
  return (
    <Text style={styles.textStyle}>
      Hello World !! This is My custom Component !!
    </Text>
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
export default CustomComponent;
