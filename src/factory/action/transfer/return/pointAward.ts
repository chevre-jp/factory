import * as ActionFactory from '../../../action';
import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import { OrganizationType } from '../../../organizationType';
import * as ReturnActionFactory from '../return';

export interface IAgent {
    id: string;
    typeOf: OrganizationType.Project;
}
export type IRecipient = ActionFactory.IParticipant;
/**
 * 入金取引識別子で指定する場合のオブジェクト
 */
export interface IObjectByTransactionIdentifier {
    typeOf: AssetTransactionType.MoneyTransfer;
    identifier: string;
}
/**
 * 出金元番号で指定する場合のオブジェクト
 */
export interface IObjectByTransactionFromLocationIdentifier {
    typeOf: AssetTransactionType.MoneyTransfer;
    object: { fromLocation: { identifier: string } };
}
export type IObject = IObjectByTransactionIdentifier | IObjectByTransactionFromLocationIdentifier;
export type IPurpose = ISimpleOrder;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}
/**
 * ポイント特典返却アクション
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
