/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import { BlueButton } from "../../Components/buttons";
import { Input, PasswordInput } from "../../Components/inputs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors } from "../../Utils/Colors";
import { Context as RegisterContext } from "../../Context/DataContext";

const SignOut = ({ navigation }) => {
  const { state, Register, locatSignIn, clearErrorMessage } = useContext(
    RegisterContext
  );

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [age, SetAge] = useState("");
  const [gender, SetGender] = useState("");
  const [phone, SetPhone] = useState("");
  const [password, SetPassword] = useState("");

  useEffect(() => {
    locatSignIn();
    clearErrorMessage();
    navigation.addListener("focus", () => {
      clearErrorMessage();
    });
  }, []);

  return (
    <KeyboardAwareScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: 50 }}>
          <Text
            onPress={() => navigation.goBack()}
            style={{
              textAlign: "center",
              color: Colors.Color_Primary,
              fontWeight: "bold",
            }}
          >
            {"<"} back{" "}
          </Text>
          <Text style={{ color: "red", textAlign: "center" }}>
            {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
          </Text>
          <Input placeholder="Name" onChangeText={(name) => SetName(name)} />
          <Input
            placeholder="Email"
            onChangeText={(email) => SetEmail(email)}
          />
          <Input placeholder="Age" onChangeText={(age) => SetAge(age)} />
          <Input
            placeholder="Gender"
            onChangeText={(gender) => SetGender(gender)}
          />
          <Input
            placeholder="Phone"
            keyboardType="numeric"
            onChangeText={(phone) => SetPhone(phone)}
          />
          <PasswordInput
            placeholder="Password"
            onChangeText={(password) => SetPassword(password)}
          />
          <BlueButton
            width={80}
            label="Sign Up"
            onPress={() =>
              Register(name, email, age, gender, phone, password, () =>
                console.log("Logged")
              )
            }
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignOut;
