import { useState, useEffect } from "react";
import { pb } from "../libs/pocketbase";

function useFetchHabits() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const records = await pb.collection("habits").getFullList({
        sort: "-created",
      });
      setHabits(records);
    }

    fetchData();
  }, []);

  return habits;
}

export default useFetchHabits;