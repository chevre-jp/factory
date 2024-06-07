import type * as COA from '@motionpicture/coa-service';

import * as RecipeFactory from '../recipe';

export type IUpdTmpReserveSeatArgs = COA.factory.reserve.IUpdTmpReserveSeatArgs;
export type IUpdTmpReserveSeatResult = COA.factory.reserve.IUpdTmpReserveSeatResult;
export interface IDirectionUpdTmpReserveSeat extends RecipeFactory.IHowToDirection {
    beforeMedia?: IUpdTmpReserveSeatArgs;
    afterMedia?: IUpdTmpReserveSeatResult;
}
export interface IStepUpdTmpReserveSeat extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.updTmpReserveSeat;
    itemListElement: [IDirectionUpdTmpReserveSeat];
}
export interface IHowToSection extends RecipeFactory.IHowToSection {
    itemListElement: [IStepUpdTmpReserveSeat];
}
export interface IRecipe extends RecipeFactory.IRecipe {
    recipeCategory: RecipeFactory.RecipeCategory.acceptCOAOffer;
    step: IHowToSection[];
}
