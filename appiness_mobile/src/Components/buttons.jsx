/** @format */

import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Colors } from "../Utils/Colors";

export function BlueButton({ label, onPress, width }) {
  return (
    <TouchableOpacity
      style={{ width: `${width}%`, ...styles.blueBtn }}
      onPress={onPress}
    >
      <Text style={styles.blueBtnText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  blueBtn: {
    height: 50,
    backgroundColor: Colors.Color_Primary,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  blueBtnText: {
    textAlign: "center",
    color: Colors.Color_Secondary,
    top: 50 / 4,
    fontSize: 17,
  },
});
