import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<{ results: Trailer[] }>(`/games/${gameId}/movies`);
  
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: () => apiClient.getAll({}),
  });
};

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<{ results: Screenshot[] }>(`/games/${gameId}/screenshots`);
  
  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: () => apiClient.getAll({}),
  });
};

export { useTrailers, useScreenshots };
export type { Trailer, Screenshot };