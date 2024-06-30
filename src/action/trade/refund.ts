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
// export type IAgent = ActionFactory.IParticipantAsSeller | ActionFactory.IParticipantAsPerson; // IParticipantAsSellerに統一(2024-06-13~)
export type IAgent = ActionFactory.IParticipantAsSeller;
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
export type IInformPayment = Pick<IInformActionAttributes<{}>, 'recipient' | 'purpose'>; // optimize(2024-07-01~)
export interface IPotentialActions {
    add2report: boolean;
    informPayment?: IInformPayment[];
}
export interface IPurposeAsPlaceOrder {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export type IPurpose =
    IOrderAsPayPurpose | // 決済カードIF承認時の着券取消の場合
    IPurposeAsReturnAction | // 注文返品の場合
    IPurposeAsPlaceOrder | // 注文取引における発行済決済URL無効化の場合
    IPurposeAsAssetTransaction // その他の場合
    ;
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
