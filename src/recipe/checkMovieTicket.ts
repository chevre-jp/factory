import { factory as surfrockFactory } from '@surfrock/sdk';

import * as RecipeFactory from '../recipe';

export type IPurchaseNumberAuthIn = surfrockFactory.service.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
export type IPurchaseNumberAuthResult = surfrockFactory.service.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
export interface IDirectionPurchaseNumberAuth extends RecipeFactory.IHowToDirection {
    beforeMedia?: IPurchaseNumberAuthIn;
    afterMedia?: IPurchaseNumberAuthResult;
}
export interface IStepPurchaseNumberAuth extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.purchaseNumberAuth;
    itemListElement: [IDirectionPurchaseNumberAuth];
}
export interface IHowToSection extends RecipeFactory.IHowToSection {
    itemListElement: [IStepPurchaseNumberAuth];
}
export interface IRecipe extends RecipeFactory.IRecipe {
    recipeCategory: RecipeFactory.RecipeCategory.checkMovieTicket;
    step: IHowToSection[];
}
