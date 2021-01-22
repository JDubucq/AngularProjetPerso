import { Arme } from './Arme';
import { Capacite } from './Capacite';
export interface Archetype{

  id: number;
  nom: string;
  dangerosite: string;
  ca: number;
  pv: number;
  descriptif: string;
  forc: number;
  dex: number;
  con: number;
  inte: number;
  sag: number;
  cha: number;
  sens: number;
  armes: Arme[];
  capacites: Capacite[];

}
