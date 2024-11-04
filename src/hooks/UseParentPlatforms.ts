// hooks/useParentPlatforms.ts
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import ms from "ms";
import { ParentPlatform } from "../components/types/Platform";

const apiClient = new APIClient<ParentPlatform>('/platforms/lists/parents');

const useParentPlatforms = () => {
  return useQuery({
    queryKey: ['parentPlatforms'],
    queryFn: () => apiClient.getAll({}),
    staleTime: ms('24h'),
  });
};

export default useParentPlatforms;