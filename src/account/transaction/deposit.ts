import { IExtendId } from '../../autoGenerated';
import { IAccount } from '../action/moneyTransfer';
import * as TransactionFactory from '../transaction';
import { AccountTransactionType } from '../transactionType';

export type IStartParamsWithoutDetail = TransactionFactory.IStartParams<AccountTransactionType.Deposit, IObjectWithoutDetail>;
/**
 * 取引開始パラメーター
 */
export type IStartParams = TransactionFactory.IStartParams<AccountTransactionType.Deposit, IObject>;
export interface IObjectWithoutDetail extends TransactionFactory.IObjectWithoutDetail {
    toLocation: TransactionFactory.ISimpleAccount;
}
/**
 * 取引対象物
 */
export interface IObject extends TransactionFactory.IObject {
    /**
     * 入金先
     */
    toLocation: Pick<IAccount, 'accountNumber' | 'name' | 'typeOf'>;
}
/**
 * 入金取引属性
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams> {
}
export type ITransaction = IExtendId<IAttributes>;
