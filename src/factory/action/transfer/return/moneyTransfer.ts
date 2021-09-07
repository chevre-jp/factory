import * as ActionFactory from '../../../action';
import * as MoneyTransferActionFactory from '../moneyTransfer';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 返却対象は入金アクション
 */
export type IObject = MoneyTransferActionFactory.IAction;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * 入金返却アクションインターフェース
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
