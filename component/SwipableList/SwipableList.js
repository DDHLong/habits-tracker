import { ScrollView, View } from "react-native";
import SwipeableCard from "./SwipeableCard";

function SwipableList() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#204B53" }}>
      <SwipeableCard />
      <SwipeableCard />
      <SwipeableCard />
      <SwipeableCard />
      <SwipeableCard />
      <SwipeableCard />
      <SwipeableCard />
      <SwipeableCard />
      <SwipeableCard />
    </ScrollView>
  );
}

export default SwipableList;