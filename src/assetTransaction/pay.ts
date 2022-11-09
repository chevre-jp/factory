import * as GMO from '@motionpicture/gmo-service';

import {
    IAttributes as IPayActionAttributes,
    ILocation,
    IOrderAsPayPurpose, IPayPurpose,
    IPendingTransaction,
    IRecipient as IPayRecipient,
    ITotalPaymentDue
} from '../action/trade/pay';
import * as AssetTransactionFactory from '../assetTransaction';
import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { IUnauthorizedCardOfMember, IUncheckedCardRaw, IUncheckedCardTokenized } from '../paymentMethod/paymentCard/creditCard';
import { IMovieTicket } from '../paymentMethod/paymentCard/movieTicket';
import { IOnPaymentStatusChanged } from '../project';
import { IPropertyValue } from '../propertyValue';
import { PaymentServiceType } from '../service/paymentService';

// 最適化(2022-05-27~)
export import IAgent = AssetTransactionFactory.IAgent;
// export type IAgent = IParticipant;
export type IRecipient = IPayRecipient;
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
    totalPaymentDue?: ITotalPaymentDue;
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
 * 取引対象物
 */
export interface IObject {
    // object: Invoice化に向けて追加(2022-05-31~)
    accountId: string;
    // object: Invoice化に向けて追加(2022-05-31~)
    paymentMethodId: string;
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
export type IObjectWithoutDetail = Pick<IObject, 'typeOf' | 'id' | 'paymentMethod'>;
export type IStartParamsWithoutDetail =
    AssetTransactionFactory.IStartParams<AssetTransactionType.Pay, IAgent, IRecipient, IObjectWithoutDetail> & {
        // add location(2022-11-11~)
        location?: ILocation;
        recipient: IRecipient;
        purpose?: IPayPurpose;
    };
export interface IStartParams extends AssetTransactionFactory.IStartParams<AssetTransactionType.Pay, IAgent, IRecipient, IObject> {
    // add location(2022-11-11~)
    location?: ILocation;
    recipient: IRecipient;
}
export interface IPotentialActions {
    /**
     * 決済アクション
     */
    pay: IPayActionAttributes[];
}
export interface IPotentialActionsParams {
    pay: {
        purpose: IOrderAsPayPurpose;
    };
}
/**
 * 確定パラメータ
 */
export interface IConfirmParams {
    id?: string;
    transactionNumber?: string;
    endDate?: Date;
    potentialActions: IPotentialActionsParams;
}
export type IResult = any;
export type IError = any;
export interface IAttributes extends AssetTransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
export type ITransaction = IExtendId<IAttributes>;
export interface ISearchConditions extends AssetTransactionFactory.ISearchConditions<AssetTransactionType.Pay> {
    object?: {
        accountId?: {
            $eq?: string;
        };
    };
}
