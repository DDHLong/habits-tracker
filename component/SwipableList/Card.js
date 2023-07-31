import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = ({ habit }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <Text>{habit.icon ? habit.icon : "📖"}</Text>
      </View>
      <View className="justify-between flex-row flex-1 items-center">
        <View>
          <Text className="text-white">{habit.name}</Text>
          <Text className="text-white">{`${habit.goal} ${habit.unit}`}</Text>
        </View>
        <Text className="text-white">{habit.time_reminder ? habit.time_reminder : "Just do it"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flex: 1,
  },
  iconContainer: {
    width: 50,
    backgroundColor: "#1F444A",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginRight: 12,
  },
});

export default Card;
