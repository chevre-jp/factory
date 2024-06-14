import type * as COA from '@motionpicture/coa-service';

import * as RecipeFactory from '../recipe';

export type IStateReserveArgs = COA.factory.reserve.IStateReserveArgs;
export type IStateReserveResult = COA.factory.reserve.IStateReserveResult;
export type IUpdReserveArgs = COA.factory.reserve.IUpdReserveArgs;
export type IUpdReserveResult = COA.factory.reserve.IUpdReserveResult;
export interface IDirectionStateReserve extends RecipeFactory.IHowToDirection {
    beforeMedia?: IStateReserveArgs;
    afterMedia?: IStateReserveResult;
}
export interface IDirectionUpdReserve extends RecipeFactory.IHowToDirection {
    beforeMedia?: IUpdReserveArgs;
    afterMedia?: IUpdReserveResult;
}
export interface IStepStateReserve extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.stateReserve;
    itemListElement: [IDirectionStateReserve];
}
export interface IStepUpdReserve extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.updReserve;
    itemListElement: [IDirectionUpdReserve];
}
export interface IHowToSection extends RecipeFactory.IHowToSection {
    itemListElement: [IStepStateReserve, IStepUpdReserve];
}
export interface IRecipe extends RecipeFactory.IRecipe {
    recipeCategory: RecipeFactory.RecipeCategory.confirmCOAReserve;
    step: IHowToSection[];
}
