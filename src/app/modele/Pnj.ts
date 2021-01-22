import { Archetype } from './Archetype';
import { Race } from './Race';
import { Faiblesses } from './Faiblesse';
import { Forces } from './Forces';

export interface Pnj{

  id: number;
  nom: string;
  niveau: number;
  forces: Forces;
  faiblesse: Faiblesses;
  race: Race;
  archetype: Archetype;

}
