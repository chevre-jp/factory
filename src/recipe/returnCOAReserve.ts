import type * as COA from '@motionpicture/coa-service';

import * as RecipeFactory from '../recipe';

export type IStateReserveArgs = COA.factory.reserve.IStateReserveArgs;
export type IStateReserveResult = COA.factory.reserve.IStateReserveResult;
export type IDelReserveArgs = COA.factory.reserve.IDelReserveArgs;
export interface IDirectionStateReserve extends RecipeFactory.IHowToDirection {
    beforeMedia?: IStateReserveArgs;
    afterMedia?: IStateReserveResult;
}
export interface IDirectionDelReserve extends RecipeFactory.IHowToDirection {
    beforeMedia?: IDelReserveArgs;
    afterMedia?: never;
}
export interface IStepStateReserve extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.stateReserve;
    itemListElement: [IDirectionStateReserve];
}
export interface IStepDelReserve extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.delReserve;
    itemListElement: [IDirectionDelReserve];
}
export interface IHowToSection extends RecipeFactory.IHowToSection {
    itemListElement: [IStepStateReserve, IStepDelReserve];
}
export interface IRecipe extends RecipeFactory.IRecipe {
    recipeCategory: RecipeFactory.RecipeCategory.returnCOAReserve;
    step: IHowToSection[];
}
