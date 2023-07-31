import { pb } from "../libs/pocketbase";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const records = await pb.collection("habits").getFullList({
    sort: "-created",
  });
  return records;
};

function useFetchHabits() {
  const { isLoading, data } = useQuery(["allHabits"], fetchData);
  return { data, isLoading };
}

export default useFetchHabits;
