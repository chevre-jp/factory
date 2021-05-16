import * as GMO from '@motionpicture/gmo-service';

import * as AccountFactory from '../../account';
import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IMonetaryAmount } from '../../monetaryAmount';
import { IMovieTicket } from '../../paymentMethod/paymentCard/movieTicket';
import { IPropertyValue } from '../../propertyValue';
import { ISeller } from '../../seller';
import { PaymentServiceType } from '../../service/paymentService';
import { IAttributes as IInformActionAttributes } from '../interact/inform';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ISeller;

export interface IOrderAsPayPurpose {
    typeOf: string;
    confirmationNumber?: string;
    orderNumber?: string;
}

export interface ITransactionAsPayPurpose {
    typeOf: string;
    id?: string;
    transactionNumber?: string;
}

export type IPayPurpose = IOrderAsPayPurpose | ITransactionAsPayPurpose;

export type IPurpose = IPayPurpose;

export type AvailablePaymentMethodType = string;

export interface IPendingTransaction {
    typeOf: AccountFactory.transactionType;
    id: string;
    transactionNumber?: string;
}

export import ICreditCardSales = GMO.factory.credit.IAlterTranResult;

/**
 * 決済方法インターフェース
 */
export interface IPaymentMethod {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 決済方法タイプ
     */
    typeOf: AvailablePaymentMethodType;
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

export interface IPaymentService {
    typeOf: PaymentServiceType;
    /**
     * 決済方法
     */
    paymentMethod: IPaymentMethod;
    pendingTransaction?: IPendingTransaction;
    /**
     * ムビチケリスト
     */
    movieTickets?: IMovieTicket[];
}

export type IObject = IPaymentService[];

export type IInformPayment = IInformActionAttributes<any, any>;

export interface IPotentialActions {
    informPayment?: IInformPayment[];
}

/**
 * 決済結果
 */
export interface IResult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: ICreditCardSales[];
    seatInfoSyncIn?: any;
    seatInfoSyncResult?: any;
}

export interface IAttributes extends ActionFactory.IAttributes<ActionType.PayAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
    recipient?: IRecipient;
}

/**
 * 決済アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
