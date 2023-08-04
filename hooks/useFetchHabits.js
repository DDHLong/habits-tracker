import { pb } from "../libs/pocketbase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const fetchData = async () => {
  const records = await pb.collection("habits").getFullList({
    sort: "-created",
  });
  return records;
};

const createHabit = async (newHabit) => {
  await pb.collection("habits").create(newHabit);
};

const deleteHabit = async (habitId) => {
  await pb.collection("habits").delete(habitId);
};

function useFetchHabits() {
  const queryClient = useQueryClient();

  const { isLoading, data, refetch } = useQuery(["allHabits"], fetchData);
  const mutationCreate = useMutation(createHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries("allHabits");
    },
  });

  const mutationDelete = useMutation(deleteHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries("allHabits");
    },
  });

  const createNewHabit = async (newHabit) => {
    await mutationCreate.mutateAsync(newHabit);
  };

  const deleteSingleHabit = async (habitId) => {
    await mutationDelete.mutateAsync(habitId);
  };

  return { data, isLoading, refetch, deleteSingleHabit, createNewHabit };
}

export default useFetchHabits;
