// hooks/usePlatformDetails.ts
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { PlatformDetails } from "../components/types/Platform";

const apiClient = new APIClient<PlatformDetails>('/platforms');

const usePlatformDetails = (id: number) => {
  return useQuery({
    queryKey: ['platform', id],
    queryFn: () => apiClient.get(id),
    enabled: !!id,
  });
};

export default usePlatformDetails;