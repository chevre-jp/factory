import * as ActionFactory from '../action';
import { ActionType } from '../actionType';

export type IObject = any;
export type IResult = any;
export type IPurpose = any;
export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.AuthorizeAction, TObject, TResult> {
    purpose?: IPurpose;
    recipient: ActionFactory.IParticipant;
}
/**
 * 承認アクション
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
