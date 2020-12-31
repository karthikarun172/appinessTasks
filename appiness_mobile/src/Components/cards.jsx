/** @format */

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../Utils/Colors";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

export function BlueCards({ name, age, gender, mail, phone }) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });
  return (
    <>
      {!fontsLoaded ? (
        <AppLoading />
      ) : (
        <View
          style={{
            marginTop: 20,
            flexDirection: "column",
            backgroundColor: Colors.Color_Primary,
            width: "80%",
            justifyContent: "space-evenly",
            borderRadius: 10,
            height: 200,
            paddingLeft: 30,
            alignSelf: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                color: Colors.Color_Secondary,
                fontFamily: "Montserrat_600SemiBold",
              }}
            >
              {name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: 150,
              justifyContent: "flex-start",
            }}
          >
            <View>
              <Text
                style={{
                  color: Colors.Color_Secondary,
                  marginBottom: 10,
                  fontFamily: "Montserrat_400Regular",
                }}
              >
                Age
              </Text>
              <Text
                style={{
                  color: Colors.Color_Secondary,
                  fontFamily: "Montserrat_400Regular",
                }}
              >
                Gender
              </Text>
              <Text
                style={{
                  color: Colors.Color_Secondary,
                  fontFamily: "Montserrat_400Regular",
                  marginTop: 10,
                }}
              >
                Phone
              </Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  color: Colors.Color_Secondary,
                  marginBottom: 10,
                  fontFamily: "Montserrat_400Regular",
                }}
              >
                {age}
              </Text>
              <Text
                style={{
                  color: Colors.Color_Secondary,
                  fontFamily: "Montserrat_400Regular",
                }}
              >
                {gender}
              </Text>
              <Text
                style={{
                  color: Colors.Color_Secondary,
                  fontFamily: "Montserrat_400Regular",
                  marginTop: 10,
                }}
              >
                {phone}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: Colors.Color_Secondary,
                fontFamily: "Montserrat_400Regular",
              }}
            >
              {mail}
            </Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
