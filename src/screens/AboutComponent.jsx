import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AboutComponent = () => {
  const fname = <text>Amit Gangwar</text>;
  return (
    <View>
      <Text style={Style1.csStyle}> Welcome !! I am CS Student !!</Text>
      <Text style={Style1.rnStyle}> I am React Native Developer !!</Text>
      <Text style={Style1.csStyle}> Hii, My Name is {fname} </Text>
    </View>
  );
};

const Style1 = StyleSheet.create({
  csStyle: {
    color: "blue",
    fontSize: 40,
  },
  rnStyle: {
    // color: "blue",
    fontSize: 30,
  },
  mnstyle: {
    fontSize: 30,
    color: "green",
  },
});

export default AboutComponent;
