import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IMonetaryAmount } from '../../monetaryAmount';
import { IMovieTicket } from '../../paymentMethod/paymentCard/movieTicket';
import { PaymentMethodType } from '../../paymentMethodType';
import PriceCurrency from '../../priceCurrency';
import { IPropertyValue } from '../../propertyValue';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IPurpose = any;
export type TypeOfObject = 'PaymentMethod';
export type AvailablePaymentMethodType = PaymentMethodType | string;

/**
 * 決済方法インターフェース
 */
export interface IPaymentMethod<T extends AvailablePaymentMethodType> {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 決済方法タイプ
     */
    typeOf: T;
    /**
     * 決済方法名称
     */
    name: string;
    /**
     * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
     */
    paymentMethodId: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty: IPropertyValue<string>[];
}

export interface ICommonPaymentMethod<T extends PaymentMethodType> {
    typeOf: TypeOfObject;
    /**
     * 決済方法
     */
    paymentMethod: IPaymentMethod<T>;
}
/**
 * クレジットカード決済の場合のオブジェクトインターフェース
 */
export interface ICreditCardPaymentMethod extends ICommonPaymentMethod<PaymentMethodType.CreditCard> {
    /**
     * 金額
     */
    price: number;
    /**
     * 通貨
     */
    priceCurrency: PriceCurrency;
    entryTranArgs: any;
    execTranArgs: any;
}
/**
 * 口座決済の場合のオブジェクトインターフェース
 */
export interface IAccountPaymentMethod extends ICommonPaymentMethod<PaymentMethodType.Account> {
    pendingTransaction: any;
}

/**
 * ムビチケ決済の場合のオブジェクトインターフェース
 */
export interface IMovieTicketPaymentMethod
    extends ICommonPaymentMethod<PaymentMethodType.MGTicket | PaymentMethodType.MovieTicket> {
    /**
     * ムビチケリスト
     */
    movieTickets: IMovieTicket[];
}

/**
 * 決済対象の決済方法インターフェース
 */
export type IPaymentMethodObject<T> =
    T extends PaymentMethodType.Account ? IAccountPaymentMethod :
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentMethod :
    T extends PaymentMethodType.MGTicket ? IMovieTicketPaymentMethod :
    T extends PaymentMethodType.MovieTicket ? IMovieTicketPaymentMethod :
    any;

export type IObject<T extends PaymentMethodType | string> = IPaymentMethodObject<T>[];

/**
 * クレジットカード決済の場合の結果インターフェース
 */
export interface ICreditCardResult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: any[];
}

export type IResult<T> =
    T extends PaymentMethodType.Account ? any :
    T extends PaymentMethodType.CreditCard ? ICreditCardResult :
    T extends PaymentMethodType.MGTicket ? any :
    T extends PaymentMethodType.MovieTicket ? any :
    any;

export interface IAttributes<T extends PaymentMethodType | string>
    extends ActionFactory.IAttributes<ActionType.PayAction, IObject<T>, IResult<T>> {
    purpose: IPurpose;
}

/**
 * 決済アクションインターフェース
 */
export type IAction<T extends PaymentMethodType | string> = ActionFactory.IAction<IAttributes<T>>;
