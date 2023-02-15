import { IExtendId } from '../../autoGenerated';
import { IAccount } from '../action/moneyTransfer';
import * as TransactionFactory from '../transaction';
import { AccountTransactionType } from '../transactionType';

export type IStartParamsWithoutDetail = TransactionFactory.IStartParams<AccountTransactionType.Transfer, IObjectWithoutDetail>;
/**
 * 取引開始パラメーター
 */
export type IStartParams = TransactionFactory.IStartParams<AccountTransactionType.Transfer, IObject>;
export interface IObjectWithoutDetail extends TransactionFactory.IObjectWithoutDetail {
    fromLocation: TransactionFactory.ISimpleAccount;
    toLocation: TransactionFactory.ISimpleAccount;
}
/**
 * 取引対象物
 */
export interface IObject extends TransactionFactory.IObject {
    /**
     * 転送元
     */
    fromLocation: Pick<IAccount, 'accountNumber' | 'name' | 'typeOf'>;
    /**
     * 転送先
     */
    toLocation: Pick<IAccount, 'accountNumber' | 'name' | 'typeOf'>;
}
/**
 * 転送取引
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams> {
}
export type ITransaction = IExtendId<IAttributes>;
