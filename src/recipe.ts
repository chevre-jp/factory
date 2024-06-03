import { ActionType } from './actionType';
import { OrganizationType } from './organizationType';

export enum RecipeCategory {
    payCreditCard = 'payCreditCard',
    payMovieTicket = 'payMovieTicket',
    publishPaymentUrl = 'publishPaymentUrl'
}
export enum StepIdentifier {
    entryTran = 'entryTran',
    execTran = 'execTran',
    searchTrade = 'searchTrade',
    alterTran = 'alterTran',
    seatInfoSync = 'seatInfoSync'
}
export interface IHowToDirection {
    typeOf: 'HowToDirection';
    beforeMedia?: any;
    afterMedia?: any;
    // text: string;
}
export interface IHowToStep {
    typeOf: 'HowToStep';
    identifier: StepIdentifier;
    itemListElement: IHowToDirection[];
}
export interface IHowToSection {
    typeOf: 'HowToSection';
    itemListElement: IHowToStep[];
}
export interface IRecipe {
    project: { id: string; typeOf: OrganizationType.Project };
    typeOf: 'Recipe';
    recipeCategory: RecipeCategory;
    step: IHowToSection[];
    recipeFor: { id: string; typeOf: ActionType };
}
