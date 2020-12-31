/** @format */

import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignOptions from "../Screens/LoggingPages/signOptions";
import SignIn from "../Screens/LoggingPages/signIn";
import SignOut from "../Screens/LoggingPages/signOut";
import Home from "../Screens/home";
import { Context as TokenContext } from "../Context/DataContext";

const Stack = createStackNavigator();

const Navigations = () => {
  const { state } = useContext(TokenContext);

  return (
    <>
      {state.token === null ? (
        <Stack.Navigator initialRouteName="signOptions" headerMode="none">
          <Stack.Screen component={SignOptions} name="signOptios" />
          <Stack.Screen component={SignIn} name="signIn" />
          <Stack.Screen component={SignOut} name="signOut" />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="home" headerMode="none">
          <Stack.Screen component={Home} name="home" />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Navigations;
