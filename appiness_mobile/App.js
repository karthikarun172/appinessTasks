/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigations from "./src/Navigations/Navigations";
import { Provider as RegisterDataProvider } from "./src/Context/DataContext";

export default function App() {
  return (
    <RegisterDataProvider>
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </RegisterDataProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
