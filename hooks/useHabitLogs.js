import { pb } from "../libs/pocketbase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const fetchData = async () => {
    const today = new Date();

    // Format the date as a string in the desired format "YYYY-MM-DD HH:mm:ss"
    const formattedDate = `${today.getFullYear()}-${
      String(today.getMonth() + 1).padStart(2, '0')
    }-${String(today.getDate()).padStart(2, '0')} 00:00:00`;
  const records = await pb.collection("habit_logs").getFullList({
    filter: `log_date >= "${formattedDate}"`,
  });
  return records;
};

const createHabitLog = async (habitLog) => {
  await pb.collection("habit_logs").create(habitLog);
};

function useHabitLogs() {
  const queryClient = useQueryClient();

  const { isLoading, data, refetch } = useQuery(["habitLogs"], fetchData);

  const mutationCreate = useMutation(createHabitLog, {
    onSuccess: () => {
      queryClient.invalidateQueries("habitLogs");
    },
  });

  const maskAsDone = async (newHabit) => {
    await mutationCreate.mutateAsync(newHabit);
  };

  return { data, isLoading, refetch, maskAsDone };
}

export default useHabitLogs;
