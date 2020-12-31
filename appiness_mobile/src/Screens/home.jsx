/** @format */

import React, { useContext, useEffect } from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Dummies } from "../Utils/Dummies";
import { BlueCards } from "../Components/cards";
import { Context as RegisterDataContext } from "../Context/DataContext";
import { BlueButton } from "../Components/buttons";
import { Colors } from "../Utils/Colors";
import { AsyncStorage } from "react-native";

const Home = () => {
  const { state, Registerd_Users, SignOff } = useContext(RegisterDataContext);

  useEffect(() => {
    Registerd_Users();
  }, []);

  // let alldatas = [...state.users, ...Dummies];

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Image
        source={require("../../assets/Logo3.png")}
        style={{ marginTop: 30, left: 30 }}
      />
      <Text
        onPress={() => SignOff()}
        style={{
          textAlign: "right",
          marginRight: 50,
          color: Colors.Color_Primary,
          fontWeight: "bold",
        }}
      >
        Sign Out
      </Text>
      <FlatList
        data={state.users}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <BlueCards
              age={item.age}
              gender={item.gender}
              mail={item.email}
              name={item.name}
              phone={item.phone}
            />
          );
        }}
      />
    </ScrollView>
  );
};

export default Home;
