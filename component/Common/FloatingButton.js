import React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";

const FloatingButton = ({ onPress, children, isLoading }) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      {isLoading ? <ActivityIndicator /> : children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#218380", // Change this to your desired color
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    right: 20,
    elevation: 5, // For Android shadow
    zIndex: 1, // To bring the button above other elements
  },
});

export default FloatingButton;
