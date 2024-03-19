import type * as GMO from '@motionpicture/gmo-service';
import type * as surfrock from '@surfrock/sdk';

import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { TransactionType } from '../../transactionType';
import { IAttributes as IInformActionAttributes } from '../interact/inform';
import {
    IOrderAsPayPurpose,
    IPaymentMethod,
    IPaymentService as IPaymentServiceOnPay,
    IPurposeAsAssetTransaction,
    IPurposeAsReturnAction
} from './pay';

export type IAgent = ActionFactory.IParticipantAsSeller | ActionFactory.IParticipantAsPerson;
export type IRecipient = ActionFactory.IParticipant;
export type IPaymentService = Omit<IPaymentServiceOnPay, 'paymentMethod'> & {
    refundFee?: number;
    paymentMethod: Pick<IPaymentMethod, 'accountId' | 'name' | 'paymentMethodId' | 'typeOf' | 'additionalProperty'>;
};
export type IObject = IPaymentService[];
export type IAlterTranResult = GMO.factory.credit.IAlterTranResult;
export interface ISeatInfoSyncResultAsError { name: string; message: string; }
export type ISeatInfoSyncIn = surfrock.service.seat.factory.ISeatInfoSyncIn;
export type ISeatInfoSyncResult = surfrock.service.seat.factory.ISeatInfoSyncResult | ISeatInfoSyncResultAsError;
export interface IResult {
    alterTranResult?: IAlterTranResult[];
    seatInfoSyncIn?: ISeatInfoSyncIn;
    seatInfoSyncResult?: ISeatInfoSyncResult;
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
