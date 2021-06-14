import { IExtendId } from '../../autoGenerated';
import { IClientUser } from '../../clientUser';
import { IAccount, IAnonymousLocation, IAttributes as IMoneyTransferActionAttributes } from '../action/moneyTransfer';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

export type IRecipient = TransactionFactory.IRecipient;
export type IAgent = TransactionFactory.IAgent;

export type IStartParamsWithoutDetail = TransactionFactory.IStartParams<TransactionType.Deposit, IAgent, IRecipient, IObjectWithoutDetail>;

/**
 * 取引開始パラメーターインターフェース
 */
export type IStartParams = TransactionFactory.IStartParams<TransactionType.Deposit, IAgent, IRecipient, IObject>;

export type IResult = any;

/**
 * エラーインターフェース
 */
export type IError = any;

export interface IObjectWithoutDetail {
    clientUser?: IClientUser;
    amount: {
        value: number;
    };
    fromLocation?: IAnonymousLocation;
    toLocation: TransactionFactory.ISimpleAccount;
    description?: string;
}

/**
 * 取引対象物インターフェース
 */
export interface IObject {
    clientUser?: IClientUser;
    /**
     * 金額
     */
    amount: {
        value: number;
    };
    /**
     * 入金元
     */
    fromLocation?: IAnonymousLocation;
    /**
     * 入金先
     */
    toLocation: IAccount;
    description?: string;
}

export interface IPotentialActions {
    moneyTransfer: IMoneyTransferActionAttributes;
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 入金取引属性インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}