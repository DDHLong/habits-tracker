import { pb } from "../libs/pocketbase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const fetchData = async () => {
  const today = new Date();

  // Format the date as a string in the desired format "YYYY-MM-DD HH:mm:ss"
  const formattedDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")} 00:00:00`;
  const records = await pb.collection("habit_logs").getFullList({
    filter: `log_date >= "${formattedDate}"`,
  });
  return records;
};

const createHabitLog = async (habitLog) => {
  await pb.collection("habit_logs").create(habitLog);
};

const deleteHabitLog = async (habitLogId) => {
  await pb.collection("habit_logs").delete(habitLogId);
};

function useHabitLogs() {
  const queryClient = useQueryClient();

  const { isLoading, data, refetch } = useQuery(["habitLogs"], fetchData);

  const {mutate: maskAsDone} = useMutation(createHabitLog,{
    onMutate: async (habitLog) => {
      await queryClient.cancelQueries(["habitLogs"]);

      const prevData = queryClient.getQueryData(["habitLogs"]);

      const tempData = [...prevData, habitLog]

      queryClient.setQueryData(["habitLogs"], tempData);

      return { prevData };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['habitLogs'], () => context?.prevData)
    },
    onSettled: () => {
      queryClient.invalidateQueries("habitLogs");
    },
  });

  const {mutate: resetLog} = useMutation(deleteHabitLog, {
    onMutate: async (habitLogId) => {
      await queryClient.cancelQueries(["habitLogs"]);

      const prevData = queryClient.getQueryData(["habitLogs"]);

      const tempData = prevData.filter((habitLog) => habitLog.id !== habitLogId)

      queryClient.setQueryData(["habitLogs"], tempData);

      return { prevData };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['habitLogs'], () => context?.prevData)
    },
    onSettled: () => {
      queryClient.invalidateQueries("habitLogs");
    },
  });

  // const maskAsDone = async (newHabit) => {
  //   await mutationCreate.mutateAsync(newHabit);
  // };

  // const resetLog = async (habit) => {
  //   await mutationDelete.mutateAsync(habit);
  // };

  return { data, isLoading, refetch, maskAsDone, resetLog };
}

export default useHabitLogs;
