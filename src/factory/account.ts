import { AccountTransactionType } from './account/transactionType';
import { AccountStatusType } from './accountStatusType';
import { AccountType } from './accountType';
import { IProject } from './project';
import { SortType } from './sortType';

import * as MoneyTransferActionFactory from './account/action/moneyTransfer';

import * as TransactionFactory from './account/transaction';
import * as DepositTransactionFactory from './account/transaction/deposit';
import * as TransferTransactionFactory from './account/transaction/transfer';
import * as WithdrawTransactionFactory from './account/transaction/withdraw';

export namespace action {
    export import moneyTransfer = MoneyTransferActionFactory;
}

export namespace transaction {
    export type IStartParams<T extends AccountTransactionType> =
        T extends AccountTransactionType.Deposit ? DepositTransactionFactory.IStartParams :
        T extends AccountTransactionType.Withdraw ? WithdrawTransactionFactory.IStartParams :
        T extends AccountTransactionType.Transfer ? TransferTransactionFactory.IStartParams :
        TransactionFactory.IStartParams<AccountTransactionType, any, any, any>;
    export type IAttributes<T> =
        T extends AccountTransactionType.Deposit ? DepositTransactionFactory.IAttributes :
        T extends AccountTransactionType.Withdraw ? WithdrawTransactionFactory.IAttributes :
        T extends AccountTransactionType.Transfer ? TransferTransactionFactory.IAttributes :
        TransactionFactory.IAttributes<any, any, any, any>;
    export type ITransaction<T> =
        T extends AccountTransactionType.Deposit ? DepositTransactionFactory.ITransaction :
        T extends AccountTransactionType.Withdraw ? WithdrawTransactionFactory.ITransaction :
        T extends AccountTransactionType.Transfer ? TransferTransactionFactory.ITransaction :
        TransactionFactory.ITransaction<any, any, any, any>;
    export type IResult<T> =
        T extends AccountTransactionType.Deposit ? DepositTransactionFactory.IResult :
        T extends AccountTransactionType.Withdraw ? WithdrawTransactionFactory.IResult :
        T extends AccountTransactionType.Transfer ? TransferTransactionFactory.IResult :
        any;
    export type IPotentialActions<T> =
        T extends AccountTransactionType.Deposit ? DepositTransactionFactory.IPotentialActions :
        T extends AccountTransactionType.Withdraw ? WithdrawTransactionFactory.IPotentialActions :
        T extends AccountTransactionType.Transfer ? TransferTransactionFactory.IPotentialActions :
        any;
    export import withdraw = WithdrawTransactionFactory;
    export import deposit = DepositTransactionFactory;
    export import transfer = TransferTransactionFactory;
}

export import transactionType = AccountTransactionType;

/**
 * 進行中取引インターフェース
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
 * 口座インターフェース
 */
export interface IAccount {
    project: IProject;
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
    name?: string;
    /**
     * 残高
     */
    balance?: number;
    /**
     * 利用可能残高
     */
    availableBalance?: number;
    /**
     * 進行中取引リスト
     */
    pendingTransactions?: IPendingTransaction[];
    /**
     * 口座開設日時
     */
    openDate?: Date;
    /**
     * 口座閉鎖日時
     */
    closeDate?: Date;
    /**
     * 口座ステータス
     */
    status?: AccountStatusType;
}

/**
 * ソート条件インターフェース
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
 * 口座検索条件インターフェース
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
    statuses?: AccountStatusType[];
    typeOf?: {
        $eq?: string;
        $in?: string[];
    };
}
