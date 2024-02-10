import * as ActionFactory from '../../../action';
import * as MoneyTransferActionFactory from '../moneyTransfer';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipantAsProject;
export type IRecipient = ActionFactory.IParticipantAsSeller;
/**
 * 返却対象は入金アクション
 */
export type IObject = Pick<
    MoneyTransferActionFactory.IAction,
    'object' | 'typeOf'
>;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * 入金返却アクション
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
