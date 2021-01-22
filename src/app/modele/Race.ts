import { Capacite } from './Capacite';
export interface Race{

  id: number;
  nom: string;
  vitesse: number;
  descriptif: string;
  forc: number;
  dex: number;
  con: number;
  inte: number;
  sag: number;
  cha: number;
  capacites: Capacite[];

}
