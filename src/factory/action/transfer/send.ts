import * as ActionFactory from '../../action';
import ActionType from '../../actionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = any;
export type IResult = any;
export type IPotentialActions = any;
export type IPurpose = any;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.SendAction, TObject, TResult> {
    agent: IAgent;
    recipient: ActionFactory.IParticipant;
    potentialActions?: IPotentialActions;
    purpose?: IPurpose;
}
/**
 * 送信(配送)アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
