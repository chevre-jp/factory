import { ISecureTran2Args, ISecureTran2Result } from '../assetTransaction/pay';
import * as RecipeFactory from '../recipe';

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
