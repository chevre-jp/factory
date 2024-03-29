import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';

// プロジェクトに変更(2022-05-18~)
export type IAgent = ActionFactory.IParticipantAsProject;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = any;
export type IPurpose = any;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.InformAction, TObject, TResult> {
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
    purpose?: IPurpose;
}
/**
 * 通知アクション
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
