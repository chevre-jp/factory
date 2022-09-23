import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import { TransactionType } from '../../../transactionType';
import * as ConfirmActionFactory from '../confirm';

/**
 * 転送元あるいは転送先の場所インターフェース
 */
export interface IObject {
    // 必要最低限に最適化(2022-05-16~)
    pendingTransaction: {
        /**
         * 資産取引ID
         */
        id: string;
    };
    transactionNumber: string;
    typeOf: AssetTransactionType.MoneyTransfer;
}
export type IResult = any;
export interface ITransactionPurpose {
    typeOf: TransactionType;
    id: string;
}
export type IPurpose = ITransactionPurpose | ISimpleOrder;
export interface IAttributes extends ConfirmActionFactory.IAttributes<IObject, IResult> {
    purpose: IPurpose;
}
/**
 * 通貨転送確定アクション
 */
export type IAction = ConfirmActionFactory.IAction<IAttributes>;
