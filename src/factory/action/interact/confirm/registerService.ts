import * as RegisterServiceFactory from '../../../assetTransaction/registerService';
import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import * as OrderProgramMembershipFactory from '../../../task/orderProgramMembership';
import * as ConfirmActionFactory from '../confirm';

export type IObject = Omit<RegisterServiceFactory.IConfirmParams, 'id'> & {
    // 取引番号は必須
    transactionNumber: string;
    typeOf: AssetTransactionType.RegisterService;
};
export type IPurpose = ISimpleOrder;
export type IResult = any;
export interface IPotentialActions {
    orderProgramMembership?: OrderProgramMembershipFactory.IAttributes[];
}
export interface IAttributes extends ConfirmActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}
/**
 * サービス登録確定アクション
 */
export type IAction = ConfirmActionFactory.IAction<IAttributes>;
