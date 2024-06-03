import type { factory as GMOFactory } from '@motionpicture/gmo-service';
import { factory as surfrockFactory } from '@surfrock/sdk';

import * as AccountFactory from '../../account';
import * as ActionFactory from '../../action';
import { IAttributes as IReturnOrderActionAttributes } from '../../action/transfer/return/order';
import { ActionType } from '../../actionType';
import { AssetTransactionType } from '../../assetTransactionType';
import { CreativeWorkType } from '../../creativeWorkType';
import { IPaymentServiceOutput } from '../../invoice';
import { ITotalPaymentDue, OrderType } from '../../order';
import { IMovieTicketPaymentCard } from '../../paymentMethod/paymentCard/movieTicket';
import { IPropertyValue } from '../../propertyValue';
import { IRecipe as IPayCreditCardRecipe } from '../../recipe/payCreditCard';
import { IRecipe as IPayMovieTicketRecipe } from '../../recipe/payMovieTicket';
import { PaymentServiceType } from '../../service/paymentService';
import { IAttributes as IInformActionAttributes } from '../interact/inform';

export { IPayCreditCardRecipe, IPayMovieTicketRecipe };
export import IAgent = ActionFactory.IParticipantAsProject;
export import IRecipient = ActionFactory.IParticipantAsSeller;
export interface IOrderAsPayPurpose {
    typeOf: OrderType.Order;
    confirmationNumber: string;
    orderNumber?: string;
}
export interface IPurposeAsAssetTransaction {
    typeOf: AssetTransactionType.Pay | AssetTransactionType.Refund;
    id?: string;
    transactionNumber?: string;
}
export type IPurposeAsReturnAction = Pick<
    IReturnOrderActionAttributes,
    'object' | 'typeOf'
>; // 最適化(2024-03-19~)
export type IPurpose = IOrderAsPayPurpose | IPurposeAsAssetTransaction | IPurposeAsReturnAction;
// | ITransactionAsPayPurpose // 廃止(2024-03-19~)
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
export type ICreditCardSales = GMOFactory.credit.IAlterTranResult;
/**
 * 決済方法インターフェース
 */
export interface IPaymentMethod {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 決済方法区分
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
    totalPaymentDue?: ITotalPaymentDue;
    /**
     * 追加特性
     */
    additionalProperty: IPropertyValue<string>[];
}
export type IMovieTicket = Pick<IMovieTicketPaymentCard, 'accessCode' | 'category' | 'identifier' | 'serviceOutput' | 'serviceType' | 'typeOf'>;
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
     * 決済カードリスト
     */
    movieTickets?: IMovieTicket[];
    /**
     * 決済サービスによって発行された決済カード
     */
    serviceOutput?: IPaymentServiceOutput;
}
export type IObject = IPaymentService[];
export type IInformPayment = IInformActionAttributes<{}, undefined>;
export interface IPotentialActions {
    add2report: boolean;
    informPayment?: IInformPayment[];
}
export type ISeatInfoSyncIn = surfrockFactory.service.seat.seatInfoSync.ISeatInfoSyncIn;
export type ISeatInfoSyncResult = surfrockFactory.service.seat.seatInfoSync.ISeatInfoSyncResult;
export interface IInstrument {
    typeOf: string;
    seatInfoSyncIn?: ISeatInfoSyncIn;
}
/**
 * 決済結果
 */
export interface IResult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: ICreditCardSales[];
    seatInfoSyncResult?: ISeatInfoSyncResult;
}
export interface ILocation {
    typeOf: CreativeWorkType.WebApplication;
    /**
     * アプリケーションID
     */
    id: string;
}
export interface IAttributes extends Omit<
    ActionFactory.IAttributes<ActionType.PayAction, IObject, IResult>,
    'description' | 'identifier' | 'location'
> {
    agent: IAgent;
    instrument?: IInstrument;
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
    recipient: IRecipient;
    // add location(2022-11-11~)
    location?: ILocation;
}
/**
 * 決済アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
