import * as ActionFactory from '../../../action';
import { OrganizationType } from '../../../organizationType';
import * as MoneyTransferActionFactory from '../moneyTransfer';
import * as ReturnActionFactory from '../return';

export interface IAgent {
    id: string;
    typeOf: OrganizationType.Project;
}
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
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * 入金返却アクション
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
