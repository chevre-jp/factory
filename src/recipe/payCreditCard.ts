import type { factory as GMO } from '@motionpicture/gmo-service';

import * as RecipeFactory from '../recipe';

export type IOptionalSiteArgs = GMO.credit.IOptionalSiteArgs;
export type ISearchTradeArgs = GMO.credit.ISearchTradeArgs & IOptionalSiteArgs;
export type ISearchTradeResult = GMO.credit.ISearchTradeResult;
export type IAlterTranArgs = GMO.credit.IAlterTranArgs & IOptionalSiteArgs;
export type IAlterTranResult = GMO.credit.IAlterTranResult;
export interface IDirectionSearchTrade extends RecipeFactory.IHowToDirection {
    beforeMedia?: ISearchTradeArgs;
    afterMedia?: ISearchTradeResult;
}
export interface IDirectionAlterTran extends RecipeFactory.IHowToDirection {
    beforeMedia?: IAlterTranArgs;
    afterMedia?: IAlterTranResult;
}
export interface IStepSearchTrade extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.searchTrade;
    itemListElement: [IDirectionSearchTrade];
}
export interface IStepAlterTran extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.alterTran;
    itemListElement: [IDirectionAlterTran];
}
export interface IHowToSection extends RecipeFactory.IHowToSection {
    itemListElement: [IStepSearchTrade, IStepAlterTran];
}
export interface IRecipe extends RecipeFactory.IRecipe {
    recipeCategory: RecipeFactory.RecipeCategory.payCreditCard;
    step: IHowToSection[];
}
