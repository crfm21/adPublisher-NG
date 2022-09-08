export interface Ad {
  id: number;
  creationDate: Date;
  subject: string;
  description: string;
  contact: string;
  adType: AdTypes;
  type: string
}

export enum AdTypes {
  Imóvel,
  Automóvel,
  Emprego
}
