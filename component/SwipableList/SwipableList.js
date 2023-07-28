import { ScrollView } from "react-native";
import SwipeableCard from "./SwipeableCard";
import useFetchHabits from "../../hooks/useFetchHabits";

function SwipableList() {
  const habits = useFetchHabits();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#204B53" }}>
      {habits.map((habit) => {
        return <SwipeableCard key={habit.id} habit={habit} />;
      })}
    </ScrollView>
  );
}

export default SwipableList;
