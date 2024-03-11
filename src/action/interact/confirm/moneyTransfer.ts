import { IParticipantAsProject } from '../../../action';
import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import { TransactionType } from '../../../transactionType';
import * as ConfirmActionFactory from '../confirm';

export type IAgent = IParticipantAsProject;
export interface IObject {
    // pendingTransaction: { // 廃止(2024-01-30~)
    //     /**
    //      * 資産取引ID
    //      */
    //     id: string;
    // };
    transactionNumber: string;
    typeOf: AssetTransactionType.MoneyTransfer;
}
export type IResult = any;
export interface ITransactionPurpose {
    typeOf: TransactionType.MoneyTransfer;
    id: string;
}
export type IPurpose = ITransactionPurpose | ISimpleOrder;
export interface IAttributes extends ConfirmActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    /**
     * 注文取引から発生した場合はISimpleOrder
     */
    purpose: IPurpose;
}
/**
 * 通貨転送確定アクション
 */
export type IAction = ConfirmActionFactory.IAction<IAttributes>;
