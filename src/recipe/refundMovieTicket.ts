import { factory as surfrockFactory } from '@surfrock/sdk';

import * as RecipeFactory from '../recipe';

export interface IResultAsError {
    name: string;
    message: string;
}
export type ISeatInfoSyncCancelIn = surfrockFactory.service.seat.seatInfoSyncCancel.ISeatInfoSyncCancelIn;
export type ISeatInfoSyncCancelResult = surfrockFactory.service.seat.seatInfoSyncCancel.ISeatInfoSyncCancelResult | IResultAsError;
export type ISeatInfoSyncIn = surfrockFactory.service.seat.seatInfoSync.ISeatInfoSyncIn;
export type ISeatInfoSyncResult = surfrockFactory.service.seat.seatInfoSync.ISeatInfoSyncResult | IResultAsError;
export interface IDirectionSeatInfoSyncCancel extends RecipeFactory.IHowToDirection {
    beforeMedia?: ISeatInfoSyncCancelIn;
    afterMedia?: ISeatInfoSyncCancelResult;
}
export interface IDirectionSeatInfoSync extends RecipeFactory.IHowToDirection {
    beforeMedia?: ISeatInfoSyncIn;
    afterMedia?: ISeatInfoSyncResult;
}
export interface IStepSeatInfoSyncCancel extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.seatInfoSyncCancel;
    itemListElement: [IDirectionSeatInfoSyncCancel];
}
export interface IStepSeatInfoSync extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.seatInfoSync;
    itemListElement: [IDirectionSeatInfoSync];
}
export interface IHowToSection extends RecipeFactory.IHowToSection {
    itemListElement: [IStepSeatInfoSyncCancel] | [IStepSeatInfoSync];
}
export interface IRecipe extends RecipeFactory.IRecipe {
    recipeCategory: RecipeFactory.RecipeCategory.refundMovieTicket;
    step: IHowToSection[];
}
