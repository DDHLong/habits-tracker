import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import SwipeableCard from "./SwipeableCard";
import useFetchHabits from "../../hooks/useFetchHabits";
import { useRefreshByUser } from "../../hooks/useRefreshByUser";

function SwipableList() {
  const { data: habits, isLoading, refetch } = useFetchHabits();

  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

  if (isLoading)
    return (
      <View
        className="justify-center items-center"
        style={{ flex: 1, backgroundColor: "#204B53" }}
      >
        <ActivityIndicator />
      </View>
    );

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#204B53" }}
      refreshControl={
        <RefreshControl
          refreshing={isRefetchingByUser}
          onRefresh={refetchByUser}
        />
      }
    >
      {habits.map((habit) => {
        return <SwipeableCard key={habit.id} habit={habit} />;
      })}
    </ScrollView>
  );
}

export default SwipableList;
