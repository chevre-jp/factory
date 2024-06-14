import type { factory as SFR } from '@surfrock/sdk';

import * as RecipeFactory from '../recipe';

export type IPurchaseNumberAuthIn = SFR.service.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
export type IPurchaseNumberAuthResult = SFR.service.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
export type IPurchaseNumberInfo = SFR.service.auth.purchaseNumberAuth.IPurchaseNumberInfo;
export type IMkknInfo = SFR.service.auth.purchaseNumberAuth.INvalidTicket;
export type IYkknInfo = SFR.service.auth.purchaseNumberAuth.IValidTicket;
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
