import { IAttributes as IMoneyTransferActionAttributes, ILocation, IPendingTransaction } from '../action/transfer/moneyTransfer';
import { IExtendId } from '../autoGenerated';
import { IMonetaryAmount } from '../monetaryAmount';
import { IProject } from '../project';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

export type IAgent = any;

export type IRecipient = any;

export interface IStartParamsWithoutDetail {
    project: IProject;
    /**
     * 取引期限
     */
    expires: Date;
    /**
     * 転送人
     */
    agent: IAgent;
    /**
     * 受取人
     */
    recipient: IRecipient;
    /**
     * 転送内容
     */
    object: IObject;
}

/**
 * 取引開始パラメーターインターフェース
 */
export interface IStartParams extends TransactionFactory.IStartParams<TransactionType.MoneyTransfer, IAgent, IRecipient, IObject> {
    /**
     * 転送先
     */
    // recipient: IRecipient;
}

export type IResult = any;

/**
 * エラーインターフェース
 */
export type IError = any;

/**
 * トークン化された口座インターフェース
 */
export type ITokenizedAccount = string;

export type IFromLocation = ILocation;

export type IToLocation = ILocation;

/**
 * 取引対象物インターフェース
 */
export interface IObject {
    /**
     * 金額
     */
    amount: IMonetaryAmount;
    /**
     * 転送元
     */
    fromLocation: IFromLocation;
    /**
     * 転送先
     */
    toLocation: IToLocation;
    /**
     * 取引説明
     */
    description?: string;
    pendingTransaction?: IPendingTransaction;
}

export interface IPotentialActions {
    /**
     * 通貨転送アクション
     */
    moneyTransfer: IMoneyTransferActionAttributes[];
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 転送取引インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.MoneyTransfer> {
}
