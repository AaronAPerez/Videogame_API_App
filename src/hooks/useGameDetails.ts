import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import ms from "ms";
import { Key, ReactNode } from "react";

export interface Platform {
  id: Key | null | undefined;
  name: ReactNode;
  platform: {
    id: number;
    slug: string;
    name: string;
  };
  released_at?: string;
  requirements?: {
    minimum?: string;
    recommended?: string;
  };
}

export interface Publisher {
  id: number;
  name: string;
}

export interface ESRBRating {
  id: number;
  slug: string;
  name: string;
}

export interface GameDetails {
  genres: any;
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  metacritic: number;
  released: string;
  background_image: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  playtime: number;
  parent_platforms: { platform: Platform }[];
  publishers: Publisher[];
  esrb_rating: ESRBRating;
  platforms: Platform[];
}

const apiClient = new APIClient<GameDetails>('/games');

const useGameDetails = (gameId: number) => 
  useQuery({
    queryKey: ['games', gameId],
    queryFn: () => apiClient.get(gameId),
    staleTime: ms('24h')
  });

export default useGameDetails;