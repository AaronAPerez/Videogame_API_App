// types/Platform.ts
export interface Platform {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    image?: string;
    year_start?: number;
    year_end?: number;
    description?: string;
  }
  
  export interface ParentPlatform {
    id: number;
    name: string;
    slug: string;
    platforms: Platform[];
  }
  
  export interface PlatformDetails extends Platform {
    description: string;
  }