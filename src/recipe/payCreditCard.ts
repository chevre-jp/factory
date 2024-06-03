import type { factory as GMOFactory } from '@motionpicture/gmo-service';

import * as RecipeFactory from '../recipe';

export type IOptionalSiteArgs = GMOFactory.credit.IOptionalSiteArgs;
export type ISearchTradeArgs = GMOFactory.credit.ISearchTradeArgs & IOptionalSiteArgs;
export type ISearchTradeResult = GMOFactory.credit.ISearchTradeResult;
export type IAlterTranArgs = GMOFactory.credit.IAlterTranArgs & IOptionalSiteArgs;
export type IAlterTranResult = GMOFactory.credit.IAlterTranResult;
export interface IDirectionSearchTrade extends RecipeFactory.IHowToDirection {
    beforeMedia: ISearchTradeArgs;
    afterMedia: ISearchTradeResult;
}
export interface IDirectionAlterTran extends RecipeFactory.IHowToDirection {
    beforeMedia?: IAlterTranArgs;
    afterMedia: IAlterTranResult;
}
export interface IStepSearchTrade extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.searchTrade;
    itemListElement: [IDirectionSearchTrade];
}
export interface IStepAlterTran extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.alterTran;
    itemListElement: [IDirectionAlterTran];
}
export interface IHowToSection {
    typeOf: 'HowToSection';
    itemListElement: [IStepSearchTrade, IStepAlterTran];
}
export interface IRecipe extends RecipeFactory.IRecipe {
    recipeCategory: RecipeFactory.RecipeCategory.payCreditCard;
    step: IHowToSection[];
}
