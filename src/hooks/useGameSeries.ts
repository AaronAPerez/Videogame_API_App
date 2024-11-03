import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Game } from "./useGames";

const useGameSeries = (gameId: number) => {
  const apiClient = new APIClient<Game>(`/games/${gameId}/game-series`);
  
  return useQuery({
    queryKey: ['gameSeries', gameId],
    queryFn: () => apiClient.getAll({}),
    enabled: !!gameId,
  });
};

export default useGameSeries;