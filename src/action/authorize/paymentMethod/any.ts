import * as ActionFactory from '../../../action';
import * as CheckMovieTicketActionFactory from '../../../action/check/paymentMethod/movieTicket';
import { IMovieTicket, ITotalPaymentDue } from '../../../action/trade/pay';
import { ActionType } from '../../../actionType';
import * as PayTransactionFactory from '../../../assetTransaction/pay';
import { AssetTransactionType } from '../../../assetTransactionType';
import { IPaymentMethodIssuedThrough } from '../../../order';
import * as CreditCardFactory from '../../../paymentMethod/paymentCard/creditCard';
import { PaymentStatusType } from '../../../paymentStatusType';
import { IPropertyValue } from '../../../propertyValue';
import { TransactionType } from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

// 最適化(2022-06-01~)
export type IAgent = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;
export type IRecipient = ActionFactory.IParticipantAsSeller;

export enum ResultType {
    Payment = 'Payment'
}

/**
 * 汎用決済方法タイプ
 */
export type IAnyPaymentMethod = string;

/**
 * 進行中取引
 */
export interface IObjectPendingTransaction {
    typeOf: AssetTransactionType.MoneyTransfer;
    id?: string;
    transactionNumber?: string;
}

export import ITokenizedPaymentCard = PayTransactionFactory.ITokenizedPaymentCard;
export import IFromLocation = PayTransactionFactory.IFromLocation;

export import IPurchaseNumberAuthResult = CheckMovieTicketActionFactory.IPurchaseNumberAuthResult;

export import IUnauthorizedCardOfMember = CreditCardFactory.IUnauthorizedCardOfMember;
export import IUncheckedCardRaw = CreditCardFactory.IUncheckedCardRaw;
export import IUncheckedCardTokenized = CreditCardFactory.IUncheckedCardTokenized;

/**
 * クレジットカード決済承認アクションに必要なクレジットカード情報
 */
export type ICreditCard = IUncheckedCardRaw | IUncheckedCardTokenized | IUnauthorizedCardOfMember;

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
    paymentMethod: IAnyPaymentMethod;
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
export interface IResult {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId: string;
    /**
     * The amount of money.
     */
    amount: number;
    /**
     * 決済方法
     */
    paymentMethod: IAnyPaymentMethod;
    /**
     * 決済ID
     */
    paymentMethodId: string;
    /**
     * 決済ステータス
     */
    paymentStatus: PaymentStatusType;
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
    issuedThrough: IPaymentMethodIssuedThrough;
}

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

export {
    ITotalPaymentDue
};
