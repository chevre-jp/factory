import * as waiter from '@waiter/factory';

import { IAction as IAuthorizeAction, IAttributes as IAuthorizeActionAttributes } from '../action/authorize';
import { IAttributes as IMoneyTransferActionAttributes } from '../action/interact/confirm/moneyTransfer';
import * as MoneyTransferAssetTransactionFactory from '../assetTransaction/moneyTransfer';
import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { IMonetaryAmount } from '../monetaryAmount';
import { PersonType } from '../personType';
import { IProject } from '../project';
import * as TransactionFactory from '../transaction';
import { TransactionType } from '../transactionType';

export type IAgent = TransactionFactory.IAgent;
// 最適化(2022-06-01~)
export interface IRecipientAsPerson {
    typeOf: PersonType.Person;
    id: string;
    /**
     * 受取人名称
     */
    name?: string;
}
export type IRecipient = IRecipientAsPerson;
export import ISeller = TransactionFactory.ISeller;
export import IPaymentCard = MoneyTransferAssetTransactionFactory.IPaymentCard;
export import ITokenizedPaymentCard = MoneyTransferAssetTransactionFactory.ITokenizedPaymentCard;
export import IOrderAsFromLocation = MoneyTransferAssetTransactionFactory.IOrderAsFromLocation;
export import IFromLocationBeforeStart = MoneyTransferAssetTransactionFactory.IFromLocationBeforeStart;
export type IFromLocation = IPaymentCard;
export type IToLocation = IPaymentCard;

export interface IObjectPendingTransaction {
    typeOf?: AssetTransactionType.MoneyTransfer;
    id?: string;
    transactionNumber?: string;
    identifier?: string;
}

export interface IStartParamsWithoutDetail {
    project: Pick<IProject, 'id' | 'typeOf'>;
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
    seller: {
        id: string;
    };
    /**
     * 転送内容
     */
    object: {
        passport?: TransactionFactory.IPassportBeforeStart;
        /**
         * 金額
         */
        amount: IMonetaryAmount;
        /**
         * 転送元
         */
        fromLocation: IFromLocationBeforeStart;
        /**
         * 転送先
         */
        toLocation: IToLocation;
        /**
         * 取引説明
         */
        description?: string;
        pendingTransaction?: IObjectPendingTransaction;
    };
}

/**
 * 取引開始パラメーターインターフェース
 */
export interface IStartParams extends TransactionFactory.IStartParams<TransactionType.MoneyTransfer, IAgent, IRecipient, IObject> {
    /**
     * 転送先
     */
    recipient: IRecipient;
    /**
     * 販売者
     */
    seller: ISeller;
}

export type IResult = any;

/**
 * エラーインターフェース
 */
export type IError = any;

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
    // fromLocation: IFromLocation;
    fromLocation: IFromLocationBeforeStart;
    /**
     * 転送先
     */
    toLocation: IToLocation;
    /**
     * 取引説明
     */
    description?: string;
    pendingTransaction?: IObjectPendingTransaction;
    /**
     * WAITER許可証
     */
    passport?: waiter.passport.IPassport;
    /**
     * 承認アクションリスト
     */
    authorizeActions: IAuthorizeAction<IAuthorizeActionAttributes<any, any>>[];
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
    seller?: {
        ids?: string[];
    };
    object?: {
    };
    potentialActions?: {
    };
    result?: {
    };
}
