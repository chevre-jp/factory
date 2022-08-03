import { IAttributes as IReturnOrderActionAttributes } from '../action/transfer/return/order';
// import * as ReturnReserveTransactionActionFactory from '../action/transfer/return/reserveTransaction';
import { IExtendId } from '../autoGenerated';
import { IProject } from '../project';
import { ISellerMerchantReturnPolicy } from '../seller';
import * as TransactionFactory from '../transaction';
import { TransactionType } from '../transactionType';

export type IAgent = TransactionFactory.IAgent;
export import ISeller = TransactionFactory.ISeller;
export type IResult = any;
export type IError = any;
/**
 * 返品理由
 */
export enum Reason {
    /**
     * カスタマー都合での返品
     */
    Customer = 'Customer',
    /**
     * 販売者都合での返品
     */
    Seller = 'Seller'
}
/**
 * 返品可能な注文
 */
export interface IReturnableOrder {
    confirmationNumber: string;
    orderNumber: string;
}
/**
 * 注文返品開始パラメータ
 */
export interface IStartParamsWithoutDetail {
    project: Omit<IProject, 'settings' | 'name' | 'subscription'>;
    expires: Date;
    agent: IAgent;
    object: {
        order: IReturnableOrder | IReturnableOrder[];
        reason: Reason;
    };
    seller: {
        id: string;
    };
}
/**
 * 取引開始パラメータ
 */
export interface IStartParams extends TransactionFactory.IStartParams<TransactionType.ReturnOrder, IAgent, undefined, IObject> {
    /**
     * 販売者
     */
    seller: ISeller;
}
type ISendEmailMessageParams = TransactionFactory.ISendEmailMessageParams;
/**
 * 返金アクションカスタムパラメータ
 */
export interface IRefundParams {
    object: {
        object: {
            paymentMethod: {
                /**
                 * 返金対象決済ID
                 */
                paymentMethodId: string;
            };
        }[];
    };
    potentialActions?: {
        /**
         * 返金メールカスタマイズ
         */
        sendEmailMessage?: ISendEmailMessageParams;
    };
}
export interface IReturnOrderActionParams {
    object?: {
        /**
         * 返品対象注文番号
         */
        orderNumber?: string;
    };
    /**
     * 注文返品後アクション
     */
    potentialActions?: {
        /**
         * クレジットカード返金アクションについてカスタマイズする場合に指定
         * 属性名称がrefundCreditCardであるが、全ての決済方法に適用可能
         */
        // chevre/apiへ移行できるか
        refundCreditCard?: IRefundParams[];
        /**
         * ムビチケ着券取消を実行するかどうか
         */
        // 廃止(2022-06-08~)
        // refundMovieTicket?: boolean;
        /**
         * Eメール送信アクション
         */
        sendEmailMessage?: ISendEmailMessageParams[];
    };
}
export interface IPotentialActionsParams {
    /**
     * 注文返品アクション
     */
    returnOrder?: IReturnOrderActionParams | IReturnOrderActionParams[];
}
export interface IConfirmParams {
    /**
     * 取引ID
     */
    id: string;
    agent?: { id?: string };
    /**
     * 取引確定後アクション
     */
    potentialActions?: IPotentialActionsParams;
}
/**
 * 取引対象物
 */
export interface IObject {
    order: IReturnableOrder[];
    reason: Reason;
    returnPolicy: ISellerMerchantReturnPolicy;
}
export interface IPotentialActions {
    /**
     * 注文返品アクション属性
     */
    returnOrder: IReturnOrderActionAttributes[];
}
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
/**
 * 返品取引
 */
export type ITransaction = IExtendId<IAttributes>;
export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.ReturnOrder> {
    object?: {
        order?: {
            /**
             * 返品対象注文番号
             */
            orderNumbers?: string[];
        };
        result?: {
        };
    };
}
