import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IMonetaryAmount } from '../../monetaryAmount';
import { IMovieTicket } from '../../paymentMethod/paymentCard/movieTicket';
import { PaymentMethodType } from '../../paymentMethodType';
import { IPropertyValue } from '../../propertyValue';
import { ISeller } from '../../seller';
import { PaymentServiceType } from '../../service/paymentService';
import { ITransaction } from '../../transaction/moneyTransfer';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ISeller;
export type IPurpose = any;
export type AvailablePaymentMethodType = PaymentMethodType | string;

export type IPendingTransaction = ITransaction;

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

/**
 * 決済結果
 */
export interface IResult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: GMO.services.credit.IAlterTranResult[];
    seatInfoSyncIn?: any;
    seatInfoSyncResult?: any;
}
export interface IAttributes extends ActionFactory.IAttributes<ActionType.PayAction, IObject, IResult> {
    purpose: IPurpose;
    recipient?: IRecipient;
}

/**
 * 決済アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
