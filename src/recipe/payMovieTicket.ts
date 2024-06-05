import { factory as surfrockFactory } from '@surfrock/sdk';

import * as RecipeFactory from '../recipe';

export interface ISeatInfoSyncResultAsError {
    name: string;
    message: string;
}
export type ISeatInfoSyncIn = surfrockFactory.service.seat.seatInfoSync.ISeatInfoSyncIn;
export type ISeatInfoSyncResult = surfrockFactory.service.seat.seatInfoSync.ISeatInfoSyncResult | ISeatInfoSyncResultAsError;
export interface IDirectionSeatInfoSync extends RecipeFactory.IHowToDirection {
    beforeMedia?: ISeatInfoSyncIn;
    afterMedia?: ISeatInfoSyncResult;
}
export interface IStepSeatInfoSync extends RecipeFactory.IHowToStep {
    identifier: RecipeFactory.StepIdentifier.seatInfoSync;
    itemListElement: [IDirectionSeatInfoSync];
}
export interface IHowToSection extends RecipeFactory.IHowToSection {
    itemListElement: [IStepSeatInfoSync];
}
export interface IRecipe extends RecipeFactory.IRecipe {
    recipeCategory: RecipeFactory.RecipeCategory.payMovieTicket;
    step: IHowToSection[];
}
