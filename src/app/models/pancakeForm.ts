export class PancakeForm {
  foodPreferences: string;
  isGlutenFree: Boolean;
  isLactoseFree: Boolean;
  typeOfFlour: string;
  noEggs: Boolean;
  noMilk: Boolean;
  isSweet: Boolean;

  constructor(params: {
    foodPreferences?: string,
    isGlutenFree?: Boolean,
    isLactoseFree?: Boolean,
    typeOfFlour?: string,
    noEggs?: Boolean,
    noMilk?: Boolean,
    isSweet?: Boolean
  } = {}) {
    this.foodPreferences = params.foodPreferences || 'all';
    this.isGlutenFree = params.isGlutenFree || false;
    this.isLactoseFree = params.isLactoseFree || false;
    this.typeOfFlour = params.typeOfFlour || '';
    this.noEggs = params.noEggs || false;
    this.noMilk = params.noMilk || false;
    this.isSweet = params.isSweet || false;
  }
}
