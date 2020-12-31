/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import { BlueButton } from "../../Components/buttons";
import { Input, PasswordInput } from "../../Components/inputs";
import { Colors } from "../../Utils/Colors";
import { Context as LoginContext } from "../../Context/DataContext";

const SignIn = ({ navigation }) => {
  const { state, Login, locatSignIn, clearErrorMessage } = useContext(
    LoginContext
  );

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  useEffect(() => {
    locatSignIn();
    clearErrorMessage();
    navigation.addListener("focus", () => {
      clearErrorMessage();
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 100 }}>
        <Text
          onPress={() => navigation.goBack()}
          style={{
            textAlign: "center",
            color: Colors.Color_Primary,
            fontWeight: "bold",
          }}
        >
          {`<`} Back{" "}
        </Text>
        <Text style={{ color: "red", textAlign: "center" }}>
          {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
        </Text>
        <Input placeholder="Email" onChangeText={(email) => SetEmail(email)} />
        <PasswordInput
          placeholder="Password"
          onChangeText={(password) => SetPassword(password)}
        />
        <BlueButton
          width={80}
          label="Sign In"
          onPress={() => Login(email, password)}
        />
      </View>
    </View>
  );
};

export default SignIn;
