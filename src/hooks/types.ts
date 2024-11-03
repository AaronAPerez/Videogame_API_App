// types.ts
export interface EmulatorSystem {
    id: string;
    name: string;
    logo: string;
    description: string;
    yearReleased: number;
    manufacturer: string;
    fileExtensions: string[];
    emulator: string;
    bios?: string[];
  }
  
  export interface Game {
    id: string;
    systemId: string;
    title: string;
    releaseYear: number;
    publisher: string;
    genre: string;
    romUrl: string;
    coverArt: string;
    description: string;
    rating?: number;
  }
  