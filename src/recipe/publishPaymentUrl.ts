import { IEntryTranArgs, IEntryTranResult, IExecTran3dsResult, IExecTranArgs, IExecTranResult } from '../assetTransaction/pay';
import * as RecipeFactory from '../recipe';

export interface IDirectionEntryTran extends RecipeFactory.IHowToDirection {
    beforeMedia: IEntryTranArgs;
    afterMedia: IEntryTranResult;
}
export interface IDirectionExecTran extends RecipeFactory.IHowToDirection {
    beforeMedia: IExecTranArgs;
    afterMedia: IExecTranResult | IExecTran3dsResult;
}
export interface IStepEntryTran extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.entryTran;
    itemListElement: [IDirectionEntryTran];
}
export interface IStepExecTran extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.execTran;
    itemListElement: [IDirectionExecTran];
}
export interface IHowToSection extends RecipeFactory.IHowToSection {
    itemListElement: [IStepEntryTran, IStepExecTran];
}
export interface IRecipe extends RecipeFactory.IRecipe {
    recipeCategory: RecipeFactory.RecipeCategory.publishPaymentUrl;
    step: IHowToSection[];
}
