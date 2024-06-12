import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { IAgent, IObjectWithoutDetail } from '../../assetTransaction/pay';
import { AssetTransactionType } from '../../assetTransactionType';
import { IExecTran3dsArgs, IExecTran3dsResult, IRecipe } from '../../recipe/publishPaymentUrl';
import { TransactionType } from '../../transactionType';
import * as AcceptActionFactory from '../accept';

export {
    IExecTran3dsArgs, IExecTran3dsResult,
    IAgent, IRecipe
};
export interface IObject { // 決済取引を受け入れる
    object: IObjectWithoutDetail;
    transactionNumber: string;
    typeOf: AssetTransactionType.Pay;
}
export interface IResult {
    paymentMethodId: string;
    paymentUrl: string;
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}

/**
 * 決済採用アクション属性
 */
export interface IAttributes extends AcceptActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AcceptAction;
    object: IObject;
    agent: IAgent;
    purpose: IPurpose;
}

/**
 * 決済採用アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
