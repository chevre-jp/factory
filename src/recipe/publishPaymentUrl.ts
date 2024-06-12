import type { factory as GMO } from '@motionpicture/gmo-service';

import * as RecipeFactory from '../recipe';

export type IEntryTranArgs = GMO.credit.IEntryTranArgs;
export type IEntryTranResult = GMO.credit.IEntryTranResult;
export type IExecTranArgs = GMO.credit.IExecTranArgs;
export type IExecTranResult = GMO.credit.IExecTranResult;
export type IExecTran3dsArgs = GMO.credit.IExecTran3dsArgs;
export type IExecTran3dsResult = GMO.credit.IExecTran3dsResult;
export interface IDirectionEntryTran extends RecipeFactory.IHowToDirection {
    beforeMedia?: IEntryTranArgs;
    afterMedia?: IEntryTranResult;
}
export interface IDirectionExecTran extends RecipeFactory.IHowToDirection {
    beforeMedia?: IExecTranArgs;
    afterMedia?: IExecTranResult | IExecTran3dsResult;
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
