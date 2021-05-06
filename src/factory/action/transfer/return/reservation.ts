import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';

export type IAgent = ActionFactory.IParticipant;
export type IObject = any;
export type IPurpose = any;
export type IResult = any;
export type IPotentialActions = any;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.ReturnAction, TObject, TResult> {
    potentialActions?: IPotentialActions;
    purpose?: IPurpose;
}

/**
 * キャンセルアクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
