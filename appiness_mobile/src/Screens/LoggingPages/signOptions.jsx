/** @format */

import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { BlueButton } from "../../Components/buttons";

const { width, height } = Dimensions.get("window");

const SignOptions = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../../assets/Logo.png")}
        style={{
          alignSelf: "center",
          justifyContent: "center",
          marginTop: height / 5,
        }}
      />
      <View style={{ marginTop: 130 }}>
        <BlueButton
          width={60}
          label="Sign In"
          onPress={() => navigation.navigate("signIn")}
        />
        <BlueButton
          width={60}
          label="Sign Up"
          onPress={() => navigation.navigate("signOut")}
        />
      </View>
    </View>
  );
};

export default SignOptions;
