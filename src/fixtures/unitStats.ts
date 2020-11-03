import { UnitSize } from '../types/units';
import { Trait } from '../types/traits';

interface StatBlock {
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  morale: number;
  command: number;
}

interface AncestryStatBlock extends StatBlock {
  traits: Trait[];
}
export const ancestryStats: { [k: string]: AncestryStatBlock } = {
  Bugbear: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Martial'],
    command: 2
  },
  Dragonborn: {
    attack: 2,
    power: 2,
    defense: 1,
    toughness: 1,
    morale: 1,
    traits: ['Courageous'],
    command: 2
  },
  Dwarf: {
    attack: 3,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
    traits: ['Stalwart'],
    command: 2
  },
  Elf: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Eternal'],
    command: 2
  },
  'Elven (Winged)': {
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Eternal'],
    command: 2
  },
  Ghoul: {
    attack: -1,
    power: 0,
    defense: 2,
    toughness: 2,
    morale: 0,
    traits: ['Undead', 'Horrify', 'Ravenous'],
    command: 2
  },
  Gnoll: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Frenzy'],
    command: 2
  },
  Gnome: {
    attack: 1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: 1,
    traits: [],
    command: 2
  },
  Goblin: {
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: 0,
    traits: [],
    command: 2
  },
  Hobgoblin: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Bred for war', 'Martial'],
    command: 2
  },
  Human: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Courageous'],
    command: 2
  },
  Kobold: {
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: -1,
    traits: [],
    command: 2
  },
  Lizardfolk: {
    attack: 2,
    power: 1,
    defense: -1,
    toughness: 1,
    morale: 1,
    traits: ['Amphibious'],
    command: 2
  },
  Ogre: {
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 1,
    traits: ['Brutal'],
    command: 2
  },
  Orc: {
    attack: 2,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
    traits: ['Savage'],
    command: 2
  },
  Skeleton: {
    attack: -2,
    power: -1,
    defense: 1,
    toughness: 1,
    morale: 1,
    traits: ['Undead', 'Mindless'],
    command: 2
  },
  Treant: {
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 0,
    traits: ['Twisting Roots', 'Rock-hurler'],
    command: 2
  },
  Troll: {
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 0,
    traits: ['Regenerate'],
    command: 2
  },
  Zombie: {
    attack: -2,
    power: 0,
    defense: 2,
    toughness: 2,
    morale: 2,
    traits: ['Undead', 'Mindless'],
    command: 2
  },
  None: {
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
    traits: [],
    command: 2
  },
};

export const experienceStats: { [k: string]: StatBlock } = {
  Green: {
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
    command: 2
  },
  Regular: {
    attack: 1,
    power: 0,
    defense: 0,
    toughness: 1,
    morale: 1,
    command: 2
  },
  Seasoned: {
    attack: 1,
    power: 0,
    defense: 0,
    toughness: 1,
    morale: 2,
    command: 2
  },
  Veteran: {
    attack: 1,
    power: 0,
    defense: 0,
    toughness: 1,
    morale: 3,
    command: 2
  },
  Elite: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 2,
    morale: 4,
    command: 2
  },
  'Super-Elite': {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 2,
    morale: 5,
    command: 2
  },
  None: {
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
    command: 2
  },
};

export const equipmentStats: { [k: string]: StatBlock } = {
  Light: {
    attack: 0,
    power: 1,
    defense: 1,
    toughness: 0,
    morale: 0,
    command: 2
  },
  Medium: {
    attack: 0,
    power: 2,
    defense: 2,
    toughness: 0,
    morale: 0,
    command: 2
  },
  Heavy: {
    attack: 0,
    power: 4,
    defense: 4,
    toughness: 0,
    morale: 0,
    command: 2
  },
  'Super-Heavy': {
    attack: 0,
    power: 6,
    defense: 6,
    toughness: 0,
    morale: 0,
    command: 2
  },
  None: {
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
    command: 2
  },
};

interface TypeStatBlock extends StatBlock {
  costMultiplier: number;
}
export const typeStats: { [k: string]: TypeStatBlock } = {
  Levies: {
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: -1,
    costMultiplier: 0.75,
    command: 2
  },
  Infantry: {
    attack: 0,
    power: 0,
    defense: 1,
    toughness: 1,
    morale: 0,
    costMultiplier: 1,
    command: 2
  },
  Cavalry: {
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 2,
    costMultiplier: 1.5,
    command: 2
  },
  'Siege Engine': {
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 1,
    morale: 0,
    costMultiplier: 1.5,
    command: 2
  },
  Archers: {
    attack: 0,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 1,
    costMultiplier: 1.75,
    command: 2
  },
  Flying: {
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 3,
    costMultiplier: 2,
    command: 2
  },
  Fortification: {
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
    costMultiplier: 1,
    command: 2
  },
};

interface SizeStatBlock {
  costMultiplier: number;
}
export const sizeStats: { [k: string]: SizeStatBlock } = {
  d4: { costMultiplier: 0.66 },
  d6: { costMultiplier: 1 },
  d8: { costMultiplier: 1.33 },
  d10: { costMultiplier: 1.66 },
  d12: { costMultiplier: 2 },
  d20: { costMultiplier: 2.33 },
};

interface FortNumberBlock {
  [k: string]: number;
}

export const fortToughness: { [k: string]: FortNumberBlock } = {
  None: {
    '1st': 10, // This is madey-upy.
    '2nd': 10,
    '3rd': 10,
    '4th': 10,
    '5th': 10,
  },
  Keep: {
    '1st': 22,
    '2nd': 24,
    '3rd': 26,
    '4th': 28,
    '5th': 30,
  },
  Tower: {
    '1st': 18,
    '2nd': 20,
    '3rd': 22,
    '4th': 24,
    '5th': 26,
  },
  Temple: {
    '1st': 18,
    '2nd': 20,
    '3rd': 22,
    '4th': 24,
    '5th': 26,
  },
};

interface FortSizeBlock {
  [k: string]: UnitSize;
}
export const fortSize: { [k: string]: FortSizeBlock } = {
  Keep: {
    '1st': 'd6',
    '2nd': 'd8',
    '3rd': 'd10',
    '4th': 'd12',
    '5th': 'd20',
  },
  Tower: {
    '1st': 'd4',
    '2nd': 'd6',
    '3rd': 'd8',
    '4th': 'd10',
    '5th': 'd12',
  },
  Temple: {
    '1st': 'd4',
    '2nd': 'd6',
    '3rd': 'd8',
    '4th': 'd10',
    '5th': 'd12',
  },
};

export const fortMorale: { [k: string]: FortNumberBlock } = {
  Keep: {
    '1st': 2,
    '2nd': 4,
    '3rd': 6,
    '4th': 8,
    '5th': 10,
  },
  Tower: {
    '1st': 1,
    '2nd': 2,
    '3rd': 3,
    '4th': 4,
    '5th': 5,
  },
  Temple: {
    '1st': 1,
    '2nd': 2,
    '3rd': 3,
    '4th': 4,
    '5th': 5,
  },
};
