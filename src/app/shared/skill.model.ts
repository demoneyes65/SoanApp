// this design is based off of michaels json file
// I would like to return and place in ID's
// this will make purchases easier to track and have
// a faster load time.


export class Skill {
  //private _id: number;
  constructor(
    public name: string,
    public cpCost: number,
    public fluff: string,
    public description: string,
    public activationCost: string,
    public requiredHeader: string,
    public tierRank: number,
    public tierType: string,
    public requiredTier: {
      nameHeader: string;
      tierRank: number;
      tierType: string;
      skillsPurchased: number;
    }[],
    public requiredSkills: string[]) { }//takes names as array

  /**
   * safeSkillCreator
   */
  public static safeSkillCreator(
    name: string,
    cpCost: number,
    fluff: string,
    description: string,
    activationCost?: string | undefined,
    requiredHeader?: string | undefined,
    tierRank?: number | undefined,
    tierType?: string | undefined,
    requiredTier?: {
      nameHeader: string;
      tierRank: number;
      tierType: string;
      skillsPurchased: number;
    }[] | undefined,
    requiredSkills?: string[] | undefined) {
    var output = new Skill(name, cpCost, fluff, description, activationCost, requiredHeader, tierRank, tierType, requiredTier, requiredSkills);
    return output;
  }




}
