import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";


interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}



const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<{ results: Screenshot[] }>(`/games/${gameId}/screenshots`);
  
  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: () => apiClient.getAll({}),
  });
};

export {useScreenshots };
export type { Screenshot };