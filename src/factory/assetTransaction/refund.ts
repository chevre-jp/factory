import { AvailablePaymentMethodType, IPaymentMethod, IPayPurpose } from '../action/trade/pay';
import { IAttributes as IRefundActionAttributes, IRecipient as IRefundRecipient } from '../action/trade/refund';
import * as AssetTransactionFactory from '../assetTransaction';
import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { IOnPaymentStatusChanged } from '../project';
// import { ISeller } from '../seller';
import { PaymentServiceType } from '../service/paymentService';

// 最適化(2022-05-27~)
export import IAgent = AssetTransactionFactory.IAgent;
// export type IAgent = ISeller;
export type IRecipient = IRefundRecipient;
export type IAnyPaymentMethod = AvailablePaymentMethodType;
/**
 * 取引対象物
 */
export interface IObject {
    // object: Invoice化に向けて追加(2022-05-31~)
    accountId: string;
    // object: Invoice化に向けて追加(2022-05-31~)
    paymentMethodId: string;
    typeOf: PaymentServiceType;
    /**
     * 発行決済サービスID
     */
    id: string;
    onPaymentStatusChanged?: IOnPaymentStatusChanged;
    paymentMethod: IPaymentMethod;
    refundFee?: number;
}
export type IObjectWithoutDetail = Omit<IObject, 'accountId' | 'paymentMethodId' | 'onPaymentStatusChanged'>;
export type IStartParamsWithoutDetail =
    AssetTransactionFactory.IStartParams<AssetTransactionType.Refund, IAgent, IRecipient, IObjectWithoutDetail>;
export interface IStartParams extends AssetTransactionFactory.IStartParams<AssetTransactionType.Refund, IAgent, IRecipient, IObject> {
}
export interface IPotentialActionsParams {
    refund?: {
        purpose?: IPayPurpose;
    };
}
/**
 * 確定パラメーター
 */
export interface IConfirmParams {
    id?: string;
    transactionNumber?: string;
    endDate?: Date;
    potentialActions?: IPotentialActionsParams;
}
export type IResult = any;
export type IError = any;
export interface IPotentialActions {
    /**
     * 返金アクション
     */
    refund: IRefundActionAttributes[];
}
export type ITransaction = IExtendId<IAttributes>;
/**
 * 返金取引
 */
export interface IAttributes extends AssetTransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
export interface ISearchConditions extends AssetTransactionFactory.ISearchConditions<AssetTransactionType.Refund> {
    object?: {
        accountId?: {
            $eq?: string;
        };
    };
}
