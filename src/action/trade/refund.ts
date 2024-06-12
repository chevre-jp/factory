import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { IAlterTranResult, IRecipe as IRefundCreditCardRecipe } from '../../recipe/refundCreditCard';
import { IRecipe as IRefundMovieTicketRecipe, ISeatInfoSyncCancelIn, ISeatInfoSyncCancelResult, ISeatInfoSyncIn, ISeatInfoSyncResult } from '../../recipe/refundMovieTicket';
import { TransactionType } from '../../transactionType';
import { IAttributes as IInformActionAttributes } from '../interact/inform';
import {
    IOrderAsPayPurpose,
    IPaymentMethod,
    IPaymentService as IPaymentServiceOnPay,
    IPurposeAsAssetTransaction,
    IPurposeAsReturnAction
} from './pay';

export {
    IAlterTranResult,
    ISeatInfoSyncCancelIn, ISeatInfoSyncCancelResult, ISeatInfoSyncIn, ISeatInfoSyncResult,
    IRefundCreditCardRecipe, IRefundMovieTicketRecipe
};
export type IAgent = ActionFactory.IParticipantAsSeller | ActionFactory.IParticipantAsPerson;
export type IRecipient = ActionFactory.IParticipant;
export type IPaymentService = Omit<IPaymentServiceOnPay, 'paymentMethod'> & {
    refundFee?: number;
    paymentMethod: Pick<IPaymentMethod, 'accountId' | 'name' | 'paymentMethodId' | 'typeOf' | 'additionalProperty'>;
};
export type IObject = IPaymentService[];
export interface IAlterTranResultAsError { name: string; message: string; }
export interface ISeatInfoSyncResultAsError { name: string; message: string; }
export interface IResult {
    // alterTranResult?: (IAlterTranResult | IAlterTranResultAsError)[]; // discontinue(2024-06-10~)
    // seatInfoSyncResult?: ISeatInfoSyncResult; // discontinue(2024-06-10~)
    // seatInfoSyncCancelResult?: ISeatInfoSyncCancelResult; // discontinue(2024-06-10~)
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
export interface IAttributes extends Pick<
    ActionFactory.IAttributes<ActionType.RefundAction, IObject, IResult>,
    'agent' | 'error' | 'object' | 'potentialActions' | 'purpose' | 'recipient' | 'result' | 'project' | 'sameAs' | 'typeOf'
> {
    agent: IAgent;
    recipient?: IRecipient;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
}
/**
 * 返金アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
