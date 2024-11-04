import { Game } from "../../hooks/useGames";

// types/Dashboard.ts
export interface UserProfile {
    id: string;
    username: string;
    email: string;
    avatarUrl?: string;
    bio?: string;
    joinDate: Date;
    favoriteGames: Game[];
    following: number;
    followers: number;
  }
  
  export interface BlogPost {
    id: string;
    userId: string;
    username: string;
    userAvatar?: string;
    gameId: number;
    gameName: string;
    gameImage: string;
    content: string;
    likes: number;
    reposts: number;
    comments: Comment[];
    createdAt: Date;
    isLiked?: boolean;
    isReposted?: boolean;
  }
  
  export interface Comment {
    id: string;
    userId: string;
    username: string;
    userAvatar?: string;
    content: string;
    createdAt: Date;
    likes: number;
  }