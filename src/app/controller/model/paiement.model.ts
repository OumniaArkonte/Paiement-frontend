import {Achat} from "./achat.model";

export class Paiement {
  public id!: number;
  public code!: string;
  public paiementEffectue!: number;
  public achat!: Achat;


}
