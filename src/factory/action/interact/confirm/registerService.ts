import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import * as RegisterServiceFactory from '../../../assetTransaction/registerService';
import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import * as OrderProgramMembershipFactory from '../../../task/orderProgramMembership';

export type IObject = RegisterServiceFactory.IConfirmParams & {
    typeOf: AssetTransactionType.RegisterService;
};
// tslint:disable-next-line:no-empty-interface
export interface IResult {
}
export type IPurpose = ISimpleOrder;
export interface IPotentialActions {
    orderProgramMembership?: OrderProgramMembershipFactory.IAttributes[];
}
export interface IAttributes extends ActionFactory.IAttributes<ActionType.ConfirmAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}

/**
 * サービス登録確定アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
