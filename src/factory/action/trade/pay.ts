import * as GMO from '@motionpicture/gmo-service';

import * as AccountFactory from '../../account';
import * as ActionFactory from '../../action';
import { IAttributes as IReturnOrderActionAttributes } from '../../action/transfer/return/order';
import { ActionType } from '../../actionType';
import { AssetTransactionType } from '../../assetTransactionType';
import { IPaymentServiceOutput } from '../../invoice';
import { IMonetaryAmount } from '../../monetaryAmount';
import { OrderType } from '../../order';
import { IMovieTicket } from '../../paymentMethod/paymentCard/movieTicket';
import { IPropertyValue } from '../../propertyValue';
import { PaymentServiceType } from '../../service/paymentService';
import { TransactionType } from '../../transactionType';
import { IAttributes as IInformActionAttributes } from '../interact/inform';

export type IAgent = ActionFactory.IParticipantAsProject;
export import IRecipient = ActionFactory.IParticipantAsSeller;
export interface IOrderAsPayPurpose {
    typeOf: OrderType.Order;
    confirmationNumber?: string;
    orderNumber?: string;
}
export interface IAssetTransactionAsPayPurpose {
    typeOf: AssetTransactionType.Pay | AssetTransactionType.Refund;
    id?: string;
    transactionNumber?: string;
}
export interface ITransactionAsPayPurpose {
    typeOf: TransactionType;
    id: string;
}
export type IReturnActionAsPayPurpose = IReturnOrderActionAttributes;
export type IPayPurpose = IOrderAsPayPurpose | IAssetTransactionAsPayPurpose | IReturnActionAsPayPurpose | ITransactionAsPayPurpose;
export type IPurpose = IPayPurpose;
export type AvailablePaymentMethodType = string;
export interface IPendingTransaction {
    typeOf: AccountFactory.transactionType;
    id: string;
    transactionNumber?: string;
    object: {
        fromLocation?: {
            /**
             * 口座番号
             */
            accountNumber: string;
        };
    };
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
     * 発行決済サービスID
     */
    id: string;
    /**
     * 決済方法
     */
    paymentMethod: IPaymentMethod;
    pendingTransaction?: IPendingTransaction;
    /**
     * ムビチケリスト
     */
    movieTickets?: IMovieTicket[];
    /**
     * 決済サービスによって発行された決済カード
     */
    serviceOutput?: IPaymentServiceOutput;
}
export type IObject = IPaymentService[];
export type IInformPayment = IInformActionAttributes<any, any>;
export interface IPotentialActions {
    informPayment?: IInformPayment[];
}
export interface IInstrument {
    typeOf: string;
    seatInfoSyncIn?: any;
}
/**
 * 決済結果
 */
export interface IResult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: ICreditCardSales[];
    // ↓instrumentへ完全移行(2022-05-02~)
    // seatInfoSyncIn?: any;
    seatInfoSyncResult?: any;
}
export interface IAttributes extends ActionFactory.IAttributes<ActionType.PayAction, IObject, IResult> {
    agent: IAgent;
    instrument?: IInstrument;
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
    recipient: IRecipient;
}
/**
 * 決済アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
