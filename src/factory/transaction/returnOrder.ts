import { IAttributes as IReturnOrderActionAttributes } from '../action/transfer/return/order';
import * as ReturnReservationActionFactory from '../action/transfer/return/reservation';
import { IExtendId } from '../autoGenerated';
import { IMerchantReturnPolicy } from '../merchantReturnPolicy';
import { IInformParams, IProject } from '../project';
// import * as WebAPIFactory from '../service/webAPI';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

export type IAgent = TransactionFactory.IAgent;

export import ISeller = TransactionFactory.ISeller;

export type IResult = any;

export type IError = any;

/**
 * 返品理由
 */
export enum Reason {
    /**
     * 顧客自身の都合での返品
     */
    Customer = 'Customer',
    /**
     * 販売者都合での返品
     */
    Seller = 'Seller'
}

export interface IReturnableOrder {
    confirmationNumber: string;
    orderNumber: string;
    /**
     * @deprecated Use confirmationNumber + orderNumber
     */
    customer?: {
        email?: string;
        telephone?: string;
    };
}

/**
 * 注文返品開始パラメータインターフェース
 */
export interface IStartParamsWithoutDetail {
    project: IProject;
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
 * 取引開始パラメーターインターフェース
 */
export interface IStartParams extends TransactionFactory.IStartParams<TransactionType.ReturnOrder, IAgent, undefined, IObject> {
    /**
     * 販売者
     */
    seller: ISeller;
}

/**
 * 注文通知パラメータ
 */
export type IInformOrderParams = IInformParams;

export import ICancelReservationObject = ReturnReservationActionFactory.IObject;
export import ICancelReservationPotentialActions = ReturnReservationActionFactory.IPotentialActions;

/**
 * 予約取消パラメータ
 * 廃止済
 */
// export interface ICancelReservationParams {
//     /**
//      * 確定対象
//      */
//     object?: ICancelReservationObject<WebAPIFactory.Identifier>;
//     potentialActions?: ICancelReservationPotentialActions;
// }

type ISendEmailMessageParams = TransactionFactory.ISendEmailMessageParams;

/**
 * クレジットカード返金パラメータ
 */
export interface IRefundCreditCardParams {
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
         * 予約取消アクション
         * 廃止済
         */
        // cancelReservation?: ICancelReservationParams[];
        /**
         * クレジットカード返金アクションについてカスタマイズする場合に指定
         */
        refundCreditCard?: IRefundCreditCardParams[];
        /**
         * ムビチケ着券取消を実行するかどうか
         */
        refundMovieTicket?: boolean;
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
 * 取引対象物インターフェース
 */
export interface IObject {
    order: IReturnableOrder[];
    reason: Reason;
    returnPolicy: IMerchantReturnPolicy;
}

export interface IPotentialActions {
    /**
     * 注文返品アクション属性
     */
    returnOrder: IReturnOrderActionAttributes[];
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 返品取引インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

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
