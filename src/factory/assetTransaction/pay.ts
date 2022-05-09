import * as GMO from '@motionpicture/gmo-service';

import {
    IAgent as IPayAgent, IAttributes as IPayActionAttributes,
    IOrderAsPayPurpose, IPayPurpose, IPendingTransaction, IRecipient as IPayRecipient
} from '../action/trade/pay';
import * as TransactionFactory from '../assetTransaction';
import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { IMonetaryAmount } from '../monetaryAmount';
import { IUnauthorizedCardOfMember, IUncheckedCardRaw, IUncheckedCardTokenized } from '../paymentMethod/paymentCard/creditCard';
import { IMovieTicket } from '../paymentMethod/paymentCard/movieTicket';
import { IOnPaymentStatusChanged } from '../project';
import { IPropertyValue } from '../propertyValue';
import { PaymentServiceType } from '../service/paymentService';

export type IAgent = IPayAgent;

export type IRecipient = IPayRecipient;

export type IObjectWithoutDetail = IObject;

export type IStartParamsWithoutDetail = TransactionFactory.IStartParams<AssetTransactionType.Pay, IAgent, IRecipient, IObject> & {
    purpose?: IPayPurpose;
};

export interface IStartParams extends TransactionFactory.IStartParams<AssetTransactionType.Pay, IAgent, IRecipient, IObject> {
}

export interface IPotentialActionsParams {
    pay: {
        purpose: IOrderAsPayPurpose;
    };
}

/**
 * 確定パラメーターインターフェース
 */
export interface IConfirmParams {
    id?: string;
    transactionNumber?: string;
    endDate?: Date;
    potentialActions: IPotentialActionsParams;
}

export type IResult = any;

export type IError = any;

/**
 * ペイメントカードトークン
 */
export type ITokenizedPaymentCard = string;
export type IFromLocation = ITokenizedPaymentCard;
// export type IFromLocation = IPaymentCard | ITokenizedPaymentCard;

/**
 * クレジットカード決済承認に必要なクレジットカードインターフェース
 */
export declare type ICreditCard = IUncheckedCardRaw | IUncheckedCardTokenized | IUnauthorizedCardOfMember;

export import IEntryTranArgs = GMO.factory.credit.IEntryTranArgs;
export import IEntryTranResult = GMO.factory.credit.IEntryTranResult;
export import IExecTranArgs = GMO.factory.credit.IExecTranArgs;
export import IExecTranResult = GMO.factory.credit.IExecTranResult;

export interface IPaymentMethod {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 追加特性
     */
    additionalProperty?: IPropertyValue<string>[];
    /**
     * The amount of money.
     */
    amount: number;
    /**
     * 説明
     */
    description?: string;
    /**
     * 決済方法名称
     * 未指定であればデフォルト値が使用されます
     */
    name?: string;
    /**
     * 決済ID
     */
    paymentMethodId?: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: IMonetaryAmount;
    /**
     * 決済方法タイプ
     */
    typeOf: string;
    /**
     * 出金元ペイメントカード
     */
    fromLocation?: IFromLocation;
    /**
     * ムビチケリスト
     */
    movieTickets?: IMovieTicket[];
    /**
     * 支払い方法
     */
    method?: string;
    /**
     * クレジットカード情報
     */
    creditCard?: ICreditCard;
}

/**
 * 取引対象物インターフェース
 */
export interface IObject {
    typeOf: PaymentServiceType;
    /**
     * 発行決済サービスID
     */
    id: string;
    paymentMethod?: IPaymentMethod;
    pendingTransaction?: IPendingTransaction;
    entryTranArgs?: IEntryTranArgs;
    entryTranResult?: IEntryTranResult;
    execTranArgs?: IExecTranArgs;
    execTranResult?: IExecTranResult;
    payAction?: any;
    onPaymentStatusChanged?: IOnPaymentStatusChanged;
}

export interface IPotentialActions {
    /**
     * 決済アクション
     */
    pay: IPayActionAttributes[];
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 転送取引インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

export interface ISearchConditions extends TransactionFactory.ISearchConditions<AssetTransactionType.Pay> {
}
