import * as ActionFactory from '../../action';
import ActionType from '../../actionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = any;
export type IResult = any;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.PrintAction, TObject, TResult> {
    agent: IAgent;
}
/**
 * 印刷アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
