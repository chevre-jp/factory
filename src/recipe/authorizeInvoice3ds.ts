import type { factory as GMO } from '@motionpicture/gmo-service';

import * as RecipeFactory from '../recipe';

export type ISecureTran2Args = GMO.credit.ISecureTran2Args;
export type ISecureTran2Result = GMO.credit.ISecureTran2Result;
export interface IDirectionSecureTran2 extends RecipeFactory.IHowToDirection {
    beforeMedia?: ISecureTran2Args;
    afterMedia?: ISecureTran2Result;
}
export interface IStepSecureTran2 extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.secureTran2;
    itemListElement: [IDirectionSecureTran2];
}
export interface IHowToSection extends RecipeFactory.IHowToSection {
    itemListElement: [IStepSecureTran2];
}
export interface IRecipe extends RecipeFactory.IRecipe {
    recipeCategory: RecipeFactory.RecipeCategory.authorizeInvoice3ds;
    step: IHowToSection[];
}
