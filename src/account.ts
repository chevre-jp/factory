import { AccountTransactionType } from './account/transactionType';
import { AccountType } from './accountType';
import { IProject } from './project';
import { SortType } from './sortType';

import * as MoneyTransferActionFactory from './account/action/moneyTransfer';

import * as TransactionFactory from './account/transaction';
import * as DepositTransactionFactory from './account/transaction/deposit';
import * as TransferTransactionFactory from './account/transaction/transfer';
import * as WithdrawTransactionFactory from './account/transaction/withdraw';
/**
 * 口座ステータスタイプ
 */
// export enum AccountStatusType {
//     /**
//      * 開設済
//      */
//     Opened = 'Opened',
//     /**
//      * 解約済
//      */
//     Closed = 'Closed'
// }
export namespace action {
    export import moneyTransfer = MoneyTransferActionFactory;
}
export namespace transaction {
    export import IAgent = TransactionFactory.IAgent;
    export import IRecipient = TransactionFactory.IRecipient;
    export import IPotentialActions = TransactionFactory.IPotentialActions;
    // export import IResult = TransactionFactory.IResult;
    // tslint:disable-next-line:no-shadowed-variable
    export type ISearchConditions = TransactionFactory.ISearchConditions;
    export type IStartParamsWithoutDetail<T extends AccountTransactionType> =
        T extends AccountTransactionType.Deposit ? DepositTransactionFactory.IStartParamsWithoutDetail :
        T extends AccountTransactionType.Withdraw ? WithdrawTransactionFactory.IStartParamsWithoutDetail :
        T extends AccountTransactionType.Transfer ? TransferTransactionFactory.IStartParamsWithoutDetail :
        never;
    export type IStartParams<T extends AccountTransactionType> =
        T extends AccountTransactionType.Deposit ? DepositTransactionFactory.IStartParams :
        T extends AccountTransactionType.Withdraw ? WithdrawTransactionFactory.IStartParams :
        T extends AccountTransactionType.Transfer ? TransferTransactionFactory.IStartParams :
        never;
    export type IAttributes<T> =
        T extends AccountTransactionType.Deposit ? DepositTransactionFactory.IAttributes :
        T extends AccountTransactionType.Withdraw ? WithdrawTransactionFactory.IAttributes :
        T extends AccountTransactionType.Transfer ? TransferTransactionFactory.IAttributes :
        never;
    export type ITransaction<T> =
        T extends AccountTransactionType.Deposit ? DepositTransactionFactory.ITransaction :
        T extends AccountTransactionType.Withdraw ? WithdrawTransactionFactory.ITransaction :
        T extends AccountTransactionType.Transfer ? TransferTransactionFactory.ITransaction :
        never;
    export import withdraw = WithdrawTransactionFactory;
    export import deposit = DepositTransactionFactory;
    export import transfer = TransferTransactionFactory;
}
export import transactionType = AccountTransactionType;
/**
 * 進行中取引
 */
export interface IPendingTransaction {
    typeOf: AccountTransactionType;
    /**
     * 取引ID
     */
    id: string;
    /**
     * 取引金額
     */
    amount: number;
}
/**
 * 口座
 */
export interface IAccount {
    project: Pick<IProject, 'id' | 'typeOf'>;
    /**
     * 口座種別
     */
    typeOf: AccountType.Account;
    /**
     * 通貨
     */
    accountType: string;
    /**
     * 口座番号
     */
    accountNumber: string;
    /**
     * 口座名義
     */
    name: string;
    /**
     * 残高
     */
    balance: number;
    /**
     * 利用可能残高
     */
    availableBalance: number;
    /**
     * 進行中取引リスト
     */
    pendingTransactions?: IPendingTransaction[];
    /**
     * 口座開設日時
     */
    openDate: Date;
    /**
     * 口座閉鎖日時
     */
    closeDate?: Date;
    /**
     * 口座ステータス
     */
    // status: AccountStatusType;
}
/**
 * ソート条件
 */
export interface ISortOrder {
    /**
     * 開設日時順
     */
    openDate?: SortType;
}
export interface IProjectSearchConditions {
    id?: {
        $eq?: string;
        $ne?: string;
    };
}
/**
 * 口座検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    accountNumber?: {
        $eq?: string;
        $in?: string[];
        $regex?: string;
    };
    accountNumbers?: string[];
    accountType?: string;
    name?: {
        $regex?: string;
    };
    openDate?: {
        $gte?: Date;
        $lte?: Date;
    };
    project?: IProjectSearchConditions;
    // statuses?: AccountStatusType[];
    typeOf?: {
        $eq?: string;
        $in?: string[];
    };
}
