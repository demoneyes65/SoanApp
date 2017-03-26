import { Purchase } from './purchase.model';

export class Character {
  public name: string;
  public race: number;
  public bloodPurchased: number;
  public staminaPurchased: number;
  public focusPurchased: number;
  public freeAttribute: string;
  public originCountry: number;
  public backstory: boolean;
  private _purchases: Purchase[];

  constructor(name?: string,
    race?: number,
    bloodPurchased?: number,
    staminaPurchased?: number,
    focusPurchased?: number,
    freeAttribute?: string,
    originCountry?: number,
    backstory?: boolean,
    purchases?: Purchase[]){
      this.name = name || '';
      this.race = race || 0;
      this.bloodPurchased = bloodPurchased || 0;
      this.staminaPurchased = staminaPurchased || 0;
      this.focusPurchased = focusPurchased || 0;
      this.freeAttribute = freeAttribute || '';
      this.originCountry = originCountry || 0;
      this.backstory = backstory || false;
      this._purchases = new Array<Purchase>();
      this._purchases.concat(purchases);
  }
}
