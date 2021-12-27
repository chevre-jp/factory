import { AvailablePaymentMethodType, IPaymentMethod, IPayPurpose } from '../action/trade/pay';
import { IAttributes as IRefundActionAttributes, IRecipient as IRefundRecipient } from '../action/trade/refund';
import * as TransactionFactory from '../assetTransaction';
import AssetTransactionType from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { IOnPaymentStatusChanged } from '../project';
import { PaymentServiceType } from '../service/paymentService';

export type IAgent = any;

export type IRecipient = IRefundRecipient;

export interface IObjectWithoutDetail {
    typeOf: PaymentServiceType;
    /**
     * 発行決済サービスID
     */
    id: string;
    paymentMethod: IPaymentMethod;
    refundFee?: number;
}

export type IStartParamsWithoutDetail =
    TransactionFactory.IStartParams<AssetTransactionType.Refund, IAgent, IRecipient, IObjectWithoutDetail>;

export interface IStartParams extends TransactionFactory.IStartParams<AssetTransactionType.Refund, IAgent, IRecipient, IObject> {
}

export interface IPotentialActionsParams {
    refund?: {
        purpose?: IPayPurpose;
    };
}

/**
 * 確定パラメーターインターフェース
 */
export interface IConfirmParams {
    id?: string;
    transactionNumber?: string;
    endDate?: Date;
    potentialActions?: IPotentialActionsParams;
}

export type IResult = any;

export type IError = any;

export type IAnyPaymentMethod = AvailablePaymentMethodType;

/**
 * 取引対象物インターフェース
 */
export interface IObject {
    typeOf: PaymentServiceType;
    /**
     * 発行決済サービスID
     */
    id: string;
    onPaymentStatusChanged?: IOnPaymentStatusChanged;
    paymentMethod: IPaymentMethod;
    refundFee?: number;
}

export interface IPotentialActions {
    /**
     * 返金アクション
     */
    refund: IRefundActionAttributes[];
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 返金取引インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

export interface ISearchConditions extends TransactionFactory.ISearchConditions<AssetTransactionType.Refund> {
}
