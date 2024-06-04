import type * as GMO from '@motionpicture/gmo-service';
import { factory as surfrockFactory } from '@surfrock/sdk';

import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { IRecipe as IRefundCreditCardRecipe } from '../../recipe/refundCreditCard';
import { IRecipe as IRefundMovieTicketRecipe } from '../../recipe/refundMovieTicket';
import { TransactionType } from '../../transactionType';
import { IAttributes as IInformActionAttributes } from '../interact/inform';
import {
    IOrderAsPayPurpose,
    IPaymentMethod,
    IPaymentService as IPaymentServiceOnPay,
    IPurposeAsAssetTransaction,
    IPurposeAsReturnAction
} from './pay';

export { IRefundCreditCardRecipe, IRefundMovieTicketRecipe };
export type IAgent = ActionFactory.IParticipantAsSeller | ActionFactory.IParticipantAsPerson;
export type IRecipient = ActionFactory.IParticipant;
export type IPaymentService = Omit<IPaymentServiceOnPay, 'paymentMethod'> & {
    refundFee?: number;
    paymentMethod: Pick<IPaymentMethod, 'accountId' | 'name' | 'paymentMethodId' | 'typeOf' | 'additionalProperty'>;
};
export type IObject = IPaymentService[];
export interface IAlterTranResultAsError { name: string; message: string; }
export type IAlterTranResult = GMO.factory.credit.IAlterTranResult;
export interface ISeatInfoSyncResultAsError { name: string; message: string; }
export type ISeatInfoSyncIn = surfrockFactory.service.seat.seatInfoSync.ISeatInfoSyncIn;
export type ISeatInfoSyncResult = surfrockFactory.service.seat.seatInfoSync.ISeatInfoSyncResult | ISeatInfoSyncResultAsError;
export type ISeatInfoSyncCancelIn = surfrockFactory.service.seat.seatInfoSyncCancel.ISeatInfoSyncCancelIn;
export type ISeatInfoSyncCancelResult =
    surfrockFactory.service.seat.seatInfoSyncCancel.ISeatInfoSyncCancelResult | ISeatInfoSyncResultAsError;
export interface IResult {
    alterTranResult?: (IAlterTranResult | IAlterTranResultAsError)[];
    // seatInfoSyncIn?: ISeatInfoSyncIn;
    seatInfoSyncResult?: ISeatInfoSyncResult;
    // seatInfoSyncCancelIn?: ISeatInfoSyncCancelIn;
    seatInfoSyncCancelResult?: ISeatInfoSyncCancelResult;
    /**
     * ペイメントカード決済の場合
     */
    accountTransaction?: { transactionNumber: string };
}
export type IInformPayment = IInformActionAttributes<{}, undefined>;
export interface IPotentialActions {
    add2report: boolean;
    informPayment?: IInformPayment[];
}
export interface IPurposeAsPlaceOrder {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export type IPurpose = IOrderAsPayPurpose | IPurposeAsAssetTransaction | IPurposeAsReturnAction | IPurposeAsPlaceOrder;
export interface IAttributes extends ActionFactory.IAttributes<ActionType.RefundAction, IObject, IResult> {
    agent: IAgent;
    recipient?: IRecipient;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
}
/**
 * 返金アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
