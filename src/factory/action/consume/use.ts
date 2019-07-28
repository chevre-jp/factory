import * as ActionFactory from '../../action';
import ActionType from '../../actionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = any;
export type IResult = any;
export type IPurpose = any;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.UseAction, TObject, TResult> {
    agent: IAgent;
    purpose?: IPurpose;
}
/**
 * 使用アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
