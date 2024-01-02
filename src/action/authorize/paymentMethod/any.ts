import * as ActionFactory from '../../../action';
import * as CheckMovieTicketActionFactory from '../../../action/check/paymentMethod/movieTicket';
import { AvailablePaymentMethodType, IMovieTicket } from '../../../action/trade/pay';
import { ActionType } from '../../../actionType';
import { ICreditCard, IFromLocation, ITokenizedPaymentCard } from '../../../assetTransaction/pay';
import { AssetTransactionType } from '../../../assetTransactionType';
import { IOrderPaymentMethodIssuedThrough, ITotalPaymentDue } from '../../../order';
import { PaymentStatusType } from '../../../paymentStatusType';
import { IPropertyValue } from '../../../propertyValue';
import { TransactionType } from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;
export type IRecipient = ActionFactory.IParticipantAsSeller;

export enum ResultType {
    Payment = 'Payment'
}

/**
 * 進行中取引
 */
export interface IObjectPendingTransaction {
    typeOf: AssetTransactionType.MoneyTransfer;
    id?: string;
    transactionNumber?: string;
}

export {
    ICreditCard,
    IFromLocation,
    ITokenizedPaymentCard
};

export import IPurchaseNumberAuthResult = CheckMovieTicketActionFactory.IPurchaseNumberAuthResult;

/**
 * 承認対象
 */
export interface IObject {
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
     * 決済方法
     */
    paymentMethod: AvailablePaymentMethodType;
    /**
     * 決済ID
     */
    paymentMethodId?: string;
    typeOf: ResultType;
    issuedThrough: {
        /**
         * 発行決済サービスID
         */
        id: string;
    };

    /**
     * 進行中取引(ペイメントカード決済)
     */
    pendingTransaction?: IObjectPendingTransaction;

    /**
     * 転送元(PaymentCard決済)
     */
    fromLocation?: IFromLocation;

    /**
     * 支払い方法(CreditCard決済)
     */
    method?: string;
    /**
     * クレジットカード情報(CreditCard決済)
     */
    creditCard?: ICreditCard;

    /**
     * (MovieTicket決済)
     */
    movieTickets?: IMovieTicket[];
}
export interface IResultPaymentMethod {
    /**
     * 決済方法区分
     */
    typeOf: AvailablePaymentMethodType;
    amount?: {
        /**
         * 決済カード通貨区分
         */
        currency?: string;
    };
}
export interface IResultAsInvoice {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId: string;
    // amount: number; // 廃止(2023-08-07~)
    // paymentMethod?: AvailablePaymentMethodType; // 廃止 Use paymentMethodAsObject(2023-08-18~)
    /**
     * 決済方法
     * amount.currencyに対応するために追加(2023-08-13~)
     * startDate>=2022-08-16T00:00:00Zのアクションの関しては互換性維持済
     */
    paymentMethodAsObject: IResultPaymentMethod;
    /**
     * 決済ID
     */
    paymentMethodId: string;
    /**
     * 決済ステータス
     * 注文に連携(2023-08-23~)
     */
    paymentStatus: PaymentStatusType.PaymentAutomaticallyApplied | PaymentStatusType.PaymentDue;
    /**
     * 決済方法名称
     */
    name: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: ITotalPaymentDue;
    /**
     * 追加特性
     */
    additionalProperty?: IPropertyValue<string>[];
    typeOf: ResultType;
    issuedThrough: IOrderPaymentMethodIssuedThrough;
}
// Array対応(2023-09-02~)
export type IResult = IResultAsInvoice | IResultAsInvoice[];
export interface IPurpose {
    typeOf: TransactionType;
    id: string;
}

export enum ServiceIdentifier {
    // 現時点で決済取引はChevreのみ対応
    Chevre = 'Chevre'
}

export interface IService {
    typeOf: 'WebAPI';
    identifier: ServiceIdentifier;
}

export type IInstrument = IService;

/**
 * 決済承認アクション属性
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    instrument: IInstrument;
    recipient: IRecipient;
    purpose: IPurpose;
}

/**
 * 決済承認アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
