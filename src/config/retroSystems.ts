// config/retroSystems.ts
import { RetroSystem } from '../types/RetroGaming';

export const retroSystems: RetroSystem[] = [
  {
    id: 'nes',
    name: 'Nintendo Entertainment System',
    shortName: 'NES',
    manufacturer: 'Nintendo',
    year: 1985,
    core: 'fceumm',
    fileExtensions: ['.nes'],
    logoUrl: '/systems/nes-logo.png',
    color: '#E60012'
  },
  {
    id: 'snes',
    name: 'Super Nintendo',
    shortName: 'SNES',
    manufacturer: 'Nintendo',
    year: 1991,
    core: 'snes9x',
    fileExtensions: ['.sfc', '.smc'],
    logoUrl: '/systems/snes-logo.png',
    color: '#4C1F7D'
  },
  {
    id: 'genesis',
    name: 'Sega Genesis',
    shortName: 'Genesis',
    manufacturer: 'Sega',
    year: 1989,
    core: 'genesis_plus_gx',
    fileExtensions: ['.md', '.bin'],
    logoUrl: '/systems/genesis-logo.png',
    color: '#0089CF'
  },
  {
    id: 'gba',
    name: 'Game Boy Advance',
    shortName: 'GBA',
    manufacturer: 'Nintendo',
    year: 2001,
    core: 'mgba',
    fileExtensions: ['.gba'],
    logoUrl: '/systems/gba-logo.png',
    color: '#6B5CA5'
  },
  // Add more systems as needed
];

export default retroSystems;