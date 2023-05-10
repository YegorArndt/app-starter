"use client";
import { Box, Button } from "@mui/material";
import { useQuery } from "react-query";
import { create } from "zustand";

type BearState = {
  bears: number;
  increase: () => void;
};

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

const Home = () => {
  const bears = useBearStore((state) => state.bears);
  const increaseBearsCount = useBearStore((state) => state.increase);
  const { data, error, isLoading } = useQuery("todos", async () => {
    return fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json());
  });

  return (
    <Box>
      <h1>{bears} bears around here ...</h1>
      <Button variant="contained" onClick={increaseBearsCount}>
        Increase bears count
      </Button>
      <h2>Todo list</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ul>
          {data.map((todo: any) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Home;
