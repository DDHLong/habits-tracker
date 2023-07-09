import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { styled, withExpoSnack } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <Text>📖</Text>
      </View>
      <StyledView className="justify-between flex-row flex-1 items-center">
        <StyledView>
          <StyledText className="text-white">Reading</StyledText>
          <StyledText className="text-white">30 pages</StyledText>
        </StyledView>
        <StyledText className="text-white">9:30 a.m</StyledText>
      </StyledView>
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

export default withExpoSnack(Card);
